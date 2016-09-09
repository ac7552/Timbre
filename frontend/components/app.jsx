import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome/welcome_container';
import Audio from './audio/audio_container';

const App = ({children}) => (
  <div className="appContainer">
    <header>
      <WelcomeContainer/>

      {/* <Audio/> */}
    </header>
    {children}
  </div>
);


export default App;
