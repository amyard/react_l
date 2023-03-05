import './App.css';
import {useMemo, useReducer, useState} from "react";


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

/*  monitoring state section  */
function ListOfNumbers() {
    // USEMEMO - using for calculation. not for simple calculation - memory lost
    const numbers = useState([10,20,30]);
    const total = useMemo(
        () => numbers.reduce((acc, number) => acc + number),
        // dependency
        numbers
    );

    const [names] = useState(["max","alex","lol","awe"]);
    // first copy the array , after sort
    // names.sort() - both arrays will be sorted
    //const sortedNames = [...names].sort();
    const sortedNames = useMemo(() => [...names].sort(), [names]);
    
    // Not to use for simple calculation
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
    const counts = useMemo(() => c1 + c2, [c1, c2]);
    
    // better use simple version
    // const counts = c1 + c2;
    
    return (
        <>
            <div>Total: {total}</div>
            <div>Names: {names.join(", ")}</div>
            <div>Sorted Names: {sortedNames.join(", ")}</div>
            
            <button onClick={() => setC1(c1 + 1)}>Count1</button>
            <button onClick={() => setC2(c2 + 1)}>Count2</button>
            <div>Counts - {counts}</div>
        </>
    )
}
/*  monitoring state section  */

function App() {
  return (
      <div>
          {/*<Counter />*/}
          {/*<NameList />*/}
          {/*<hr/>*/}
          {/*<SomeReducer />*/}
          <UserForm />
          <hr/>
          <ListOfNumbers />
      </div>
  )
}

export default App;
