import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ButtonAvatar from '../components/ButtonAvatar';
import GuestHeader from '../components/Headers/GuestHeader';
import { useRouter } from 'next/router';
import { useUser } from '../context/AuthContext';

export default function Index() {
  const router = useRouter();
  const { user } = useUser();

  if (user) {
    router.push(`/boards`);
  }
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(234,230,255,1), rgba(255,255,255,1))',
      }}
    >
      <GuestHeader />
      <Container
        maxWidth='md'
        style={{
          marginTop: '32px',
        }}
      >
        <Grid container alignItems='center' justify='center'>
          <Grid item xs={12}>
            <Typography
              variant='h3'
              component='h1'
              style={{ color: '#091E42', fontWeight: 500, textAlign: 'center' }}
            >
              Meet <b>Craplo</b>, a crappy{' '}
              <a target='_blank' href='http://trello.com/' rel='noreferrer'>
                Trello
              </a>{' '}
              Clone
            </Typography>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '16px' }}>
            <Typography
              variant='h6'
              component='h2'
              style={{ color: '#091E42', fontWeight: 400, textAlign: 'center' }}
            >
              Its purpose is to demonstrate how to use modern technologies like{' '}
              <b>Next.JS</b>, <b>AWS Amplify</b> and <b>TypeScript</b> to create
              a real project at lightning pace ⚡!{' '}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ marginTop: '24px', marginBottom: '64px' }}
          >
            <Button
              variant='contained'
              onClick={() => router.push(`/signup`)}
              style={{
                minWidth: '100%',
                backgroundColor: '#0065FF',
                minHeight: '44px',
              }}
            >
              <Typography
                variant='h6'
                style={{ color: '#fff', fontWeight: 500 }}
              >
                Sign Up - It&apos;s Free!
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '24px', marginBottom: '8px' }}>
            <Typography
              variant='h5'
              component='h3'
              style={{ color: '#091E42', fontWeight: 500, textAlign: 'center' }}
            >
              Made with love 💕
            </Typography>
          </Grid>

          <Grid item xs={12} style={{ marginBottom: '64px' }}>
            <Typography
              variant='h6'
              component='h2'
              style={{ color: '#091E42', fontWeight: 400, textAlign: 'center' }}
            >
              <b>Craplo</b> was built the latest and greatest in serverless
              tech. It&apos;s also completely open source. You can find the code
              for it on my{' '}
              <a
                target='_blank'
                href='https://github.com/jarrodwatts/trello-clone'
                rel='noreferrer'
              >
                GitHub here
              </a>
              . As well as a full length video-tutorial on how to build
              something like this on my{' '}
              <a
                href='https://www.youtube.com/channel/UCJae_agpt9S3qwWNED0KHcQ'
                target='_blank'
                rel='noreferrer'
              >
                YouTube Channel.
              </a>
            </Typography>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
              style={{ marginTop: '4px' }}
            >
              <ButtonAvatar
                link={'https://aws.amazon.com/amplify/'}
                alt={'AWS Amplify'}
                src={'/tech/amplify.png'}
              />
              <ButtonAvatar
                link={'https://nextjs.org/'}
                alt={'Next.JS'}
                src={'/tech/next.png'}
              />
              <ButtonAvatar
                link={'https://www.typescriptlang.org/'}
                alt={'TypeScript'}
                src={'/tech/ts.svg'}
              />
              <ButtonAvatar
                link={'http://material-ui.com/'}
                alt={'Material UI'}
                src={'/tech/mui.png'}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ marginTop: '24px', marginBottom: '16px' }}
          >
            <Typography
              variant='h5'
              component='h3'
              style={{ color: '#091E42', fontWeight: 500, textAlign: 'center' }}
            >
              Who Am I? 🤔
            </Typography>
          </Grid>

          <Grid item xs={12} style={{ marginBottom: '64px' }}>
            <Typography
              variant='h6'
              component='h2'
              style={{ color: '#091E42', fontWeight: 400, textAlign: 'center' }}
            >
              My name is{' '}
              <a
                target='_blank'
                href='https://jarrodwatts.com'
                rel='noreferrer'
              >
                Jarrod Watts
              </a>
              ! If you&apos;d like to see more cool stuff like this, I would
              love for you to check out my content! Feel free to check out my
              tutorial videos on how to build things just like this! Thanks :-)
            </Typography>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
              style={{ marginTop: '4px' }}
            >
              <ButtonAvatar
                link={
                  'https://www.youtube.com/channel/UCJae_agpt9S3qwWNED0KHcQ'
                }
                alt={'YouTube Channel'}
                src={'/socials/youtube.png'}
              />
              <ButtonAvatar
                link={'https://twitter.com/jarrodWattsDev'}
                alt={'Twitter'}
                src={'/socials/twitter.png'}
              />
              <ButtonAvatar
                link={'https://blog.jarrodwatts.com/'}
                alt={'My Blog'}
                src={'/socials/hashnode.png'}
              />
              <ButtonAvatar
                link={'https://www.reddit.com/user/cumcopter'}
                alt={'Reddit'}
                src={'/socials/reddit.svg'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
