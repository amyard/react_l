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
        console.log("formatting the guess  ", currentGuess);
    }
    
    // add new guess to the guesses state
    // update isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {
        
    }
    
    // handle keyup event and track current guess
    // if user presses Enter, start a new game
    const handleKeyup = ({key}) => {
        
        if(key === 'Enter') {
            // only add guess if turn is less than 5
            if(turn > 5) {
                console.log("you use all your guesses")
                return ;
            }
            // do not allow duplicate words
            if(history.includes(currentGuess)) {
                console.log("you already tried the word")
                return ;
            }
            // check word is chars long
            if(currentGuess.length !== 5) {
                console.log("word must be 5 char long")
                return ;
            }
            
            formatGuess();
        }
        
        // delete last characters
        if(key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            
            return ;
        }
        
        // to remove Shift/Ctrl/Delete and so on buttons , we add check
        if(/^[A-Za-z]$/.test(key)) {
            // only 5 char words can be used here
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                })
            }
        }
    }
    
    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle;