import {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    
    // get the list of all states.
    //const state =useSelector((state) => state);
    //console.log(state)
    
    // to fix error with unknown type of state.repositories need create useTypedSelector
    const {data, error, loading} =useTypedSelector(
        (state) => state.repositories
    );
    
    
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        // to stop refresh the page
        event.preventDefault();
        searchRepositories(term);
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>

            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList;