import {useState} from "react";

const useWordle = (solution) => {

    var COLOR = {
      GREY: 'grey', 
      GREEN: 'green',
      YELLOW: 'yellow',
    };
    
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // array of six element
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({}) // {a: 'green', b: 'yellow'}
    
    // format a guess into an array of letter objects
    // e.g. [{key: "a", color: "yellow"}]
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: COLOR.GREY}
        })
        
        // find any green letters
        formattedGuess.forEach((l, index) => {
            if(solutionArray[index] === l.key) {
                formattedGuess[index].color = COLOR.GREEN;
                solutionArray[index] = null;
            }
        })
        
        // find amu yellow colors
        formattedGuess.forEach((l, index) => {
            if(solutionArray.includes(l.key) && l.color !== COLOR.GREEN) {
                formattedGuess[index].color = COLOR.YELLOW;
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        })
        
        return formattedGuess;
    }
    
    // add new guess to the guesses state
    // update isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true);
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            
            return newGuesses;
        })
        
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })
        
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}
            formattedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key]
                
                if(letter.color === COLOR.GREEN) {
                    newKeys[letter.key] = COLOR.GREEN;
                    return
                }

                if(letter.color === COLOR.YELLOW && currentColor !== COLOR.GREEN) {
                    newKeys[letter.key] = COLOR.YELLOW;
                    return
                }

                if(letter.color === COLOR.GREY && currentColor !== COLOR.GREEN  && currentColor !== COLOR.YELLOW) {
                    newKeys[letter.key] = COLOR.GREY;
                    return
                }
            })
            
            return newKeys;
        })
        
        setCurrentGuess('')
    }
    
    // handle keyup event and track current guess
    // if user presses Enter, start a new game
    const handleKeyup = ({key}) => {
        
        if(key === 'Enter') {
            // only add guess if turn is less than 5
            if(turn > 5) {
                return ;
            }
            // do not allow duplicate words
            if(history.includes(currentGuess)) {
                return ;
            }
            // check word is chars long
            if(currentGuess.length !== 5) {
                return ;
            }
            
            const formatted = formatGuess();
            addNewGuess(formatted)
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
    
    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}

export default useWordle;