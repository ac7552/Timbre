import React from 'react';
import { Link } from 'react-router';
import WelcomeContainer from './welcome/welcome_container';
import Audio from './audio/audio_container';

const App = ({children}) => (
  <div>
    <header>
      <WelcomeContainer/>
    </header>
    {children}
  </div>
);


export default App;