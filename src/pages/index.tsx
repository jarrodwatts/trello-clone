import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ButtonAvatar from '../components/ButtonAvatar';
import GuestHeader from '../components/Headers/GuestHeader';
export default function Index() {
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
              This is a crappy Trello Clone
            </Typography>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '16px' }}>
            <Typography
              variant='h6'
              component='h2'
              style={{ color: '#091E42', fontWeight: 400, textAlign: 'center' }}
            >
              It&apos;s &quot;crappy&quot; because I am not the best at
              designing or styling things... It&apos;s purpose is to demonstrate
              how to use modern technologies like <b></b>Next.JS, AWS Amplify
              and TypeScript to create something awesome and functional at
              lightning pace ⚡!
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            style={{ marginTop: '24px', marginBottom: '64px' }}
          >
            <Button
              variant='contained'
              style={{ minWidth: '100%', backgroundColor: '#0065FF' }}
            >
              <Typography style={{ color: '#fff', fontWeight: 600 }}>
                Sign Up -It&apos;s Free!
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
              <b>El Craplo</b> was built using this amazing tech. It&apos;s also
              completely open source. You can find the code for it on my GitHub.
              As well as a full length video-tutorial on how to build something
              like this on my YouTube Channel.
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
              My name is Jarrod Watts! If you would like to get in touch or
              support the creation of more things like this, I would love you to
              come along for the ride!
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
