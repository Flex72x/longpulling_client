import './App.css';
import Chat from "./Chat";
import {useState} from "react";
import Login from "./Login";

function App() {
    const [name, setName] = useState('')
    const [connected, setConnected] = useState(false)

  return (
    <div className="App">
        {
            connected  === true?
                <Chat name={name}/>
                :
                <Login setConnected={setConnected} setName={setName} />
        }
    </div>
  );
}

export default App;