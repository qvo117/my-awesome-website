import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
    {/*Our counter component is rendered multiple times on our app and each counter component keeps track of 
    its own version of the count value
    <Counter />
    <Counter />
    <Counter />*/}
    {/*Our counter component takes a prop*/}
    <Counter counterTitle = {"Number of MSA Students"} />
    <Counter counterTitle = {"People Running the Application"}/>
    <Counter counterTitle = {"People Keeping Up"}/>
    <Counter />
    </div>
  );
}

export default App;
