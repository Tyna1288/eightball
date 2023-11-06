import React from "react";
import './App.css';
import EightBall from './EightBall'
import { ResetButton } from "./EightBall";
import CountColor from "./CountColor";

function App() {
  return (
    <div className="App">
      <EightBall />
      <ResetButton />
      <CountColor />
    </div>
  );
}

export default App;
