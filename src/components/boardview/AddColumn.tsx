import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { Column, CreateColumnInput, CreateColumnMutation } from '../../API';
import AddIcon from '@material-ui/icons/Add';
import { createColumn } from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme: Theme) => ({
  addIconSmall: {
    maxHeight: '16px',
    maxWidth: '16px',
    color: '#5e6c84',
    marginRight: '4px',
  },
  addText: {
    color: '#5e6c84',
    fontSize: '14px',
  },
  addButton: {
    marginLeft: '8px',
    paddingTop: '8px',
    paddingBottom: '8px',
    minWidth: '272px',
    maxWidth: '272px',
    color: '#172b4d',
    backgroundColor: '#00000014',
    padding: '8px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#00000025',
    },
  },
}));

interface Props {
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  allColumns: Column[];
  boardId: string;
}

export default function AddColumn({
  setColumns,
  allColumns,
  boardId,
}: Props): ReactElement {
  const classes = useStyles();

  const addList = async () => {
    const input: CreateColumnInput = {
      id: uuidv4(),
      boardId: boardId,
      name: ' ',
      tickets: [],
      columnIndex: allColumns.length,
    };

    setColumns([...allColumns, input as Column]);

    (await API.graphql({
      query: createColumn,
      variables: { input: input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: CreateColumnMutation; errors: any[] };
  };

  return (
    <ButtonBase onClick={addList} className={classes.addButton}>
      <Grid container direction='row' alignItems='center'>
        <Grid item>
          <AddIcon className={classes.addIconSmall} color='inherit' />
        </Grid>
        <Grid item>
          <Typography className={classes.addText}>Add another list</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
}
