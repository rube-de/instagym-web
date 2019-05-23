import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CaptureVideo} from './components/CaptureVideo'
import InstructionVideo from './components/InstructionVideo'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="left">
        <header>Instruction</header>
        <div className="Video">
        <InstructionVideo />
        </div>
      </div>
      <div className="right">
        <div className="webcambox">
          <CaptureVideo />
        </div>
        <div className="statsbox">
          Instagym 
          for the correct form
        </div>
      </div>

    </div>
  );
}

export default App;
