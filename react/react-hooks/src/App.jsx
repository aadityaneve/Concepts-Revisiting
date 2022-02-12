import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'
import AlertComponent from './components/AlertComponent'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AlertComponent />
    </div>
  );
}

export default App;

/* 

  What are react Hooks?
    Hooks are functions that lets you 'Hook into' React state and 
    lifecycle features from function components.

    Mounting, Updating and Unmounting

    useState, useEffect
    useContext, useRef

*/
