import {useEffect, useState} from "react";

export function GetData() {
    const [names, setNames] = useState([]);
    
    // calls only once
    useEffect(() => {
        fetch("/data/names.json")
            .then((response) => response.json())
            .then((data) => setNames(data));
    }, []);
    
    const [selectedNameDetails, setSelectedNameDetails] = useState(null);
    
    const onSelectedChange = (name) => {
        fetch(`/data/${name}.json`)
            .then((response) => response.json())
            .then((data) => setNames(data));
    }
    
    return (
        <>
            <div>
                {names.map((name) => <button key={name} onClick={()=>onSelectedChange(name)}>{name}</button>)}
            </div>
            <div>{JSON.stringify(selectedNameDetails)}</div>
        </>
    )
}

export function StopWatch() {
    const [time, setTime] = useState(0);
    
    // useEffect(() => {
    //     setInterval(() => {
    //         //console.log(time);
    //         // CORRECT VERSION OF DOING.
    //         setTime((time) => {
    //             //console.log(time);
    //             return time + 1
    //         });
    //     }, 1000);
    // }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((time) => {
                return time + 1
            });
        }, 1000);
        
        return () => clearInterval(intervalId)
    }, []);
    
    return <div>Time: {time}</div>
}