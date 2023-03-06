import useWordle from "../hooks/useWordle";
import {useEffect} from "react";

export default function Wordle({solution}) {
    const {currentGuess, handleKeyup} = useWordle(solution);
    
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        
        // to clean the event listener
        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup])
    
    return (
        <>
            <div>solution - {solution}</div>
            <div>current guess - {currentGuess}</div>
        </>
    )
}