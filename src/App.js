import './App.css';
import Info from './Info'
import {useState} from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick = {() => {setVisible(!visible)}}>
        {visible ? "hide" : "show"}
      </button>
      {visible && <Info />}
    </div>
  ) ;
}

export default App;
