import {useState} from "react";

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    
    // format a guess into an array of letter objects
    // e.g. [{key: "a", color: "yellow"}]
    const formatGuess = () => {
        
    }
    
    // add new guess to the guesses state
    // update isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {
        
    }
    
    // handle keyup event and track current guess
    // if user presses Enter, start a new game
    const handleKeyup = () => {
        
    }
    
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle;