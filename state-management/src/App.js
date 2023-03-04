import './App.css';
import {useReducer, useState} from "react";


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


/*  useReducer section  */
function SomeReducer() {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "SET_NAME":
                return {...state, name: action.payload};
            case "ADD_NAME":
                return {
                    ...state, 
                    names: [...state.names, state.name], 
                    name:""
                };
        }
    }, {
        names: [],
        name: "",
    });
    
    return (
        <div>
            <div>
                {
                    state.names.map((name, index) => (
                        <div key={index}>{name}</div>
                    ))
                }
            </div>
            <input 
                type="text"
                value={state.name}
                onChange={e => dispatch({type:"SET_NAME", payload: e.target.value})}
            />
            <button onClick={() => dispatch({type:"ADD_NAME"})}>Add Name</button>
            <div>Name = {state.name}</div>
        </div>
    )
}

function UserForm() {
    const [state, dispatch] = useReducer((state, action) => ({
        ...state,
        ...action
    }), {
        first: "",
        last: "",
    })
    
    return (
        <div>
            <input type="text" value={state.first} onChange={(e) => dispatch({first: e.target.value})} />
            <input type="text" value={state.last} onChange={(e) => dispatch({last: e.target.value})} />
            <div>First - {state.first}. Last - {state.last}</div>
        </div>
    )
}
/*  useReducer section  */

function App() {
  return (
      <div>
          <Counter />
          <NameList />
          <hr/>
          <SomeReducer />
          <UserForm />
      </div>
  )
}

export default App;
