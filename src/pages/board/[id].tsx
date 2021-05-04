import React from 'react';
import { withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { getBoard } from '../../graphql/queries';
import { GetBoardQuery, GetBoardQueryVariables } from '../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import UserHeader from '../../components/Headers/UserHeader';

Amplify.configure({ ...awsconfig, ssr: true });

interface Props {
  board: any;
}

export default function IndividualBoardPage({ board }: Props) {
  console.log('Board:', board);

  return (
    <React.Fragment>
      <UserHeader st={'grey'} />
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
