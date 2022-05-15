import React from 'react';
import './App.css';
import Unity, { UnityContent } from 'react-unity-webgl';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import automatonLogo from './automaton-logo-high-res.png';
import { FaGooglePlay } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { MdFullscreen } from 'react-icons/md';

//https://github.com/jeffreylanters/react-unity-webgl/blob/main/documentation/docs/legacy-docs/version-7-x.md
const unityContent = new UnityContent(
  'Automaton-WebGL/Build/Build 16-9 Portfolio.json',
  'Automaton-WebGL/Build/UnityLoader.js',
  {
    adjustOnWindowResize: true,
  }
);

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </header>

      <div
        className="parallaxBlack"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <img
            src={automatonLogo}
            alt="automaton logo"
            width={'30%'}
            style={{ padding: 5, margin: 15 }}
          />
        </div>
        <Stack
          spacing={1}
          style={{
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ fontSize: '1.4em' }}>
            How to Play: Use left-click to select code pieces, and scroll or
            drag to navigate the selection menu and code window.
          </p>
          <div
            style={{
              width: '100%',
              height: '28.125vw',
              background: 'white',
              paddingBottom: '56.25%',
              padding: 3,
            }}
          >
            <Unity unityContent={unityContent} width="100vw" height="100vh" />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: '18em',
              height: '3em',
              textTransform: 'none',
              alignSelf: 'flex-end',
            }}
            className="button"
            onClick={() => {
              unityContent.setFullscreen(true);
            }}
          >
            <MdFullscreen
              size={42}
              style={{
                verticalAlign: 'middle',
              }}
            />
            <p>Full Screen</p>
          </Button>
        </Stack>
        <p>↓ links and info ↓</p>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          spacing={1}
          columns={14}
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <Grid item xs={1} />
          <Grid item xs={7}>
            <h1>About Automaton</h1>
            <p>
              Automaton is a programming game for Android smartphones. The
              player uses a simple c-like language to program robots to perform
              tasks and complete the level. The game features manually created
              levels designed to introduce new programming concepts. It was
              designed to be beginner friendly while having optional challenges
              for experienced players.
            </p>
            <p>
              Automaton was developed by Jeremy Friesen using the Unity game
              engine. It was released on the Google Play store in August 2019,
              and has since been downloaded over 50,000 times. In 2021,
              Automaton was made open source and is available on GitHub. In
              2022, Automaton was adjusted to work in a horizontal orientation,
              and built for WebGL to be hosted on this site.
            </p>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <h1>Quick Info</h1>
            <ul>
              <li>
                Made with: <i className={'devicon-unity-original'} />
                Unity, <i className={'devicon-csharp-plain'} />
                C#
              </li>
              <li>
                Over <b>50k</b> downloads
              </li>
              <li>
                This web page was made with{' '}
                <i className={'devicon-react-original'} />
                React
              </li>
            </ul>
            <h1>Links</h1>
            <ul>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.JeremyFriesen.AutomationInc&hl=en">
                  <FaGooglePlay style={{ textDecoration: 'underline' }} />
                  Download from Google Play
                </a>
              </li>
              <li>
                <a href="https://github.com/jeremy-friesen/automaton">
                  <i
                    className={'devicon-github-original'}
                    style={{ textDecoration: 'none' }}
                  >
                    {' '}
                  </i>
                  Source Repository on Github
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
