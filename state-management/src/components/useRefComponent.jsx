import {useEffect, useRef, useState} from "react";

export function InputRef() {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    // to increment ID by 1
    const idRef = useRef(1);
    const [names, setNames] = useState([
        {id: idRef.current++, name: "max"},
        {id: idRef.current++, name: "awe"},
    ]);
    const onAddName = () => {
        setNames([
            ...names,
            {
                id: idRef.current++, 
                name: inputRef.current.value
            }
        ]);
        inputRef.current.value = '';
    }
    
    return (
        <>
            <div>
                {names.map((name) => (
                    <div key={name.id}>{name.id} - {name.name}</div>
                ))}
            </div>
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={onAddName}>Add name</button>
            </div>
        </>
    )
}