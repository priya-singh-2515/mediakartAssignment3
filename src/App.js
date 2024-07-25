import React from 'react';
import './App.css';
import AdComponent from './components/AdComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url('img/thar1.jpeg')` , backgroundSize: 'cover', backgroundPosition: 'center' , width:'100%', height:'50vh'}}>
      </header>
      <div className="content">
        <AdComponent />
      </div>
      <div className="extra-content">
        <p>Keep scrolling to see more...</p>
      </div>
    </div>
  );
}

export default App;
