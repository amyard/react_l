import {useState} from "react";
import {useDispatch} from "react-redux";
import {actionCreators} from '../state'

const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        // to stop refresh the page
        event.preventDefault();
        
        dispatch(actionCreators.searchRepositories(term) as any);
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;