import logo from './logo.svg';
import './App.css';
import {useState} from "react";


/*  useState section  */
function NameList() {
    const [list, setList] = useState(["max", "lol", "awe"]);
    const [name, setName] = useState("");
    // const [name, setName] = useState(() => "max");
    
    const onAddName = () => {
        // list.push(name);
        setList([...list, name]);
        setName("");
    }
    
    return (
        <div>
            <ul>
                {list.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onAddName}>Add name</button>
        </div>
    )
}
function Counter() {
    const [count, setCount] = useState(10);

    function addOne() {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <button onClick={addOne}>{count}</button>
        </div>
    );  
}
/*  useState section  */

function App() {
  return (
      <div>
          <Counter />
          <NameList />
      </div>
  )
}

export default App;
