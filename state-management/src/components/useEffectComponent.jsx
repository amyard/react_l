import {useEffect, useState} from "react";

export function GetData() {
    const [names, setNames] = useState([]);
    
    // calls only once
    useEffect(() => {
        fetch("/data/names.json")
            .then((response) => response.json())
            .then((data) => setNames(data));
    }, []);
    
    const [selectedName, setSelectedName] = useState(null);
    const [selectedNameDetails, setSelectedNameDetails] = useState(null);
    
    useEffect(() => {
        if(selectedName) {
            fetch(`/data/${selectedName}.json`)
                .then((response) => response.json())
                .then((data) => setSelectedNameDetails(data));
        }
    }, [selectedName]);
    
    return (
        <>
            <div>
                {names.map((name) => <button key={name} onClick={()=>setSelectedName(name)}>{name}</button>)}
            </div>
            <div>{JSON.stringify(selectedNameDetails)}</div>
        </>
    )
}