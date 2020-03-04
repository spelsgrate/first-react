import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCardComponent'

function App() {
  return (
    <div className="App">
    <PersonCard firstName="Jane" lastName="Doe" age={45} HairColor="Black" />
    <PersonCard firstName="John" lastName="Smith" age={50} HairColor="Brown" />
    <PersonCard firstName="Millard" lastName="Fillmore" age={88} HairColor="Brown" />
    <PersonCard firstName="Maria" lastName="Smith" age={62} HairColor="Brown" />
    </div>
  );
}

export default App;
