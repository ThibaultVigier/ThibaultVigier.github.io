import React from 'react';
import meBitmoji from './img/me.png';
import { Container, Header, Grid, Segment, Image } from 'semantic-ui-react';
import SocialButtonGroup from './components/SocialButton';

const Home = () => {
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Column>
          <Segment basic textAlign="center">
            <Image
              src={meBitmoji}
              alt="me as a bitmoji"
              circular
              centered
              size="medium"
            />
            <Header as="h1">
              Hi, my name is Thibault!
              <Header.Subheader>
                Fullstack Engineer - Python / JavaScript
              </Header.Subheader>
            </Header>
            <SocialButtonGroup />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Home;
