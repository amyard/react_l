import {useState} from "react";

export function NameList() {
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
export function Counter() {
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