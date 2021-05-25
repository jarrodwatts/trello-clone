import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import AuthContext from '../context/AuthContext';

// import and configure amplify on all pages.
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

const isLocalhost = process.env.NODE_ENV == 'development';

const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = awsconfig.oauth.redirectSignIn.split(',');

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsconfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

Amplify.configure({
  ...updatedAwsConfig,
  // https://github.com/aws-amplify/amplify-cli/issues/3794
  // This allows us to use email as the "owner" claim rather than sub by default.
  // BUT... prevents us from making server-side requests with the API.....
  // There is a PR for that here. For now we will make this trade-off.
  // https://github.com/aws-amplify/amplify-js/pull/7827
  graphql_headers: async () => {
    try {
      // @ts-ignore: idToken doesn't exist but it really does
      const token = (await Auth.currentSession()).idToken.jwtToken;
      return { Authorization: token };
    } catch (e) {
      console.error(e);
      return {};
    }
  },
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Craplo - by Jarrod Watts</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </React.Fragment>
  );
}

export default MyApp;
