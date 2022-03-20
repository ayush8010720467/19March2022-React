import './App.css';
import Button from './Button';
import {useState} from 'react';

function App() {
  const [timmerValue, setTimmerValue] = useState(10790);
  const [stateOfExecution, setStateOfExecution] = useState(0);
  const [timmerId, settimmerId] = useState(0);
  const start = function(){
    setStateOfExecution(1);
    settimmerId(setInterval(()=>{
      setTimmerValue((timmerValue)=>timmerValue+1);
    },1000))
  }
  const stop = function(){
    clearInterval(timmerId);
    settimmerId(0);
  }
  const reset = function(){
    stop();
    setTimmerValue(0);
    start();
  }

  return (
    <div className="App">
      <span>{parseInt(timmerValue/(60*60))}:{parseInt(timmerValue/60)%60}:{timmerValue%60}</span>
      {stateOfExecution === 0? <Button title={'Start'} click={start}></Button>:
      <Button click={stop} title={'Stop'}></Button>
      }
      <Button click={reset} title={'Restart'}></Button>
    </div>
  );
}

export default App;
