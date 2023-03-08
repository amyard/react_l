import {useEffect, useState} from "react";

export default function Keypad() {
    const [letters, setLetters] = useState(null);
    
    useEffect(() => {
        fetch('./data/letters.json')
            .then(res => res.json())
            .then(json => setLetters(json.letters))
    }, [])
    
    return (
        <div className="keypad">
            {letters && letters.map((letter) => {
                return (
                    <div key={letter.key}>{letter.key}</div>
                )
            })}
        </div>
    )
}