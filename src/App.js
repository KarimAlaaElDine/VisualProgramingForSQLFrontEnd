import React,{useState} from 'react';
import './App.css';
import './Function List/FunctionsList'
import FunctionList from './Function List/FunctionsList';
import PlayArea from './Play Area/PlayArea';
import globalContext from './GlobalState';


function App() {
  const initState = useState({
        available:[],
        databases:[],
        Entities:[{name:"None", properties:["size","height"]},
        {name:"Exist",properties:["size","height"]}],
        Push:{}
    });


  return (
    
    <div className="App">
    <globalContext.Provider value={initState} >
      <FunctionList />
      <PlayArea />
    </globalContext.Provider>
    </div>
  );
}

export default App;
