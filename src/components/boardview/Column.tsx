import React, { ReactElement, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase, Grid, TextField, Typography } from '@material-ui/core';
import {
  Board,
  Column,
  ColumnInput,
  Ticket,
  TicketInput,
  UpdateBoardInput,
  UpdateBoardMutation,
} from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import { updateBoard } from '../../graphql/mutations';

const useStyles = makeStyles((theme: Theme) => ({
  column: {
    minWidth: '272px',
    maxWidth: '272px',
    minHeight: '78px',
    color: '#172b4d',
    backgroundColor: '#ebecf0',
    padding: '8px',
    borderRadius: 4,
    marginLeft: '8px',
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '24px',
    color: '#172b4d',
    marginLeft: '8px',
  },
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
  },
}));

interface Props {
  column: Column;
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board | null>>;
}

export default function ColumnComponent({
  column,
  board,
  setBoard,
}: Props): ReactElement {
  const classes = useStyles();
  const [columnName, setColumnName] = useState<string>(
    column.name ? column.name : ''
  );
  const [editNameToggle, toggleEditName] = useState<boolean>(false);

  const addTicketToColumn = async () => {
    const newTicket: TicketInput = {
      id: uuidv4(),
      title: '',
      // @ts-ignore column shouldn't be undefined ever
      columnId: column.id,
    };

    let updatedTickets: Ticket[];

    if (column.tickets) {
      updatedTickets = [...column.tickets, newTicket as Ticket];
    } else {
      updatedTickets = [newTicket as Ticket];
    }

    const updatedColumns = board.columns?.map((c) => {
      if (c.id === column.id) {
        return { ...c, tickets: updatedTickets };
      }
      return c;
    });

    const newBoard = {
      ...board,
      columns: updatedColumns,
    };

    setBoard(newBoard);

    const input: UpdateBoardInput = {
      // @ts-ignore WHYYYYYYYY
      id: board.id,
      columns: newBoard.columns as ColumnInput[],
    };

    try {
      (await API.graphql({
        query: updateBoard,
        variables: { input: input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as UpdateBoardMutation;
    } catch (error) {
      console.error(error);
    }
  };

  const handleColumnNameExit = async () => {
    toggleEditName(!editNameToggle);

    // update column name in the thang
    const newBoard: Board = {
      ...board,
      columns: board?.columns?.map((c) => {
        return c.id === column.id
          ? {
              ...c,
              name: columnName,
            }
          : { ...c };
      }),
    };

    setBoard(newBoard);

    const input: UpdateBoardInput = {
      // @ts-ignore :-)
      id: board.id,
      columns: newBoard.columns as ColumnInput[],
    };

    try {
      (await API.graphql({
        query: updateBoard,
        variables: { input: input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as UpdateBoardMutation;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction='column' className={classes.column}>
      <div style={{ maxHeight: '40px', minHeight: '40px' }}>
        {!editNameToggle && (
          <ButtonBase onClick={() => toggleEditName(!editNameToggle)}>
            <Typography className={classes.name}>
              {column?.name && column.name != ' '
                ? columnName
                : 'Enter a column name'}
            </Typography>
          </ButtonBase>
        )}
        {editNameToggle && (
          <TextField
            style={{ maxHeight: '7px' }}
            id={`${column.id}`}
            margin='dense'
            fullWidth
            autoFocus
            value={columnName}
            name='columnTitle'
            onChange={(e) => setColumnName(e.target.value)}
            onBlur={handleColumnNameExit}
          />
        )}
      </div>
      {/* @ts-ignore: Why does Amplify think column.id can be null...? It can't. In the schema it MUST be there.*/}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {column?.tickets?.map((ticket, key) => (
              <TicketComponent
                key={ticket?.id}
                ticket={ticket}
                keyProp={key}
                board={board}
                setBoard={setBoard}
                column={column}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <ButtonBase onClick={addTicketToColumn} className={classes.addButton}>
        <Grid container direction='row' alignItems='center'>
          <Grid item>
            <AddIcon className={classes.addIconSmall} color='inherit' />
          </Grid>
          <Grid item>
            <Typography className={classes.addText}>
              Add another card
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    </Grid>
  );
}
