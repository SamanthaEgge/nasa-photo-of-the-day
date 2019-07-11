import React from "react";
import "./App.scss";

import PhotoDisplay from './components/PhotoDisplay/PhotoDisplay.js'

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo of the Day <span className='App-logo'>🚀</span>!</h1>
      <PhotoDisplay />
    </div>
  );
}

export default App;
