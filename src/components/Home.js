import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import meBitmoji from '../img/me.png';
import { Header, Grid, Segment, Image } from 'semantic-ui-react';
import SocialButtonGroup from './SocialButton';

const minWidth = 400;
const minHeight = 640;

const Home = () => {
  const { innerHeight, innerWidth } = useWindowSize();

  const width = innerWidth > minWidth ? innerWidth : minWidth;
  const height = innerHeight > minHeight ? innerHeight : minHeight;

  return (
    <Grid
      columns={1}
      centered
      verticalAlign="middle"
      style={{ height, width, minHeight, minWidth }}
    >
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
  );
};

export default Home;
