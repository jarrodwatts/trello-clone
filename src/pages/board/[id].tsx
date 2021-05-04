import React from 'react';
import { withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { getBoard } from '../../graphql/queries';
import {
  Board,
  Column,
  GetBoardQuery,
  GetBoardQueryVariables,
} from '../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import UserHeader from '../../components/Headers/UserHeader';
import Image from 'next/image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ColumnComponent from '../../components/boardview/Column';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundImage: {
    zIndex: -50,
  },
  title: {
    color: '#172b4d',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '8px',
  },
}));

interface Props {
  board: Board;
}

export default function IndividualBoardPage({ board }: Props) {
  const classes = useStyles();
  console.log('Board:', board);

  return (
    <React.Fragment>
      <Image
        alt={board.name}
        src='/boards/beach.jpg'
        layout='fill'
        objectFit='cover'
        quality={100}
        className={classes.backgroundImage}
      />
      <UserHeader st={'grey'} />
      <div style={{ padding: '16px' }}>
        <Typography variant='h5' className={classes.title}>
          {board.name}
        </Typography>

        <Grid container direction='row' spacing={1}>
          {board?.columns?.items?.map((column: Column | null) => (
            <ColumnComponent column={column} key={column?.id} />
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const SSR = withSSRContext({ req });

  const input: GetBoardQueryVariables = {
    id: context?.params?.id as string,
  };

  const response = (await SSR.API.graphql({
    query: getBoard,
    variables: input,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetBoardQuery; errors: any[] };

  console.log(response);

  return {
    props: {
      board: response.data.getBoard,
    },
  };
};
