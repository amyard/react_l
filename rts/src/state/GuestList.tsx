import {useState} from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setQuests] = useState<string[]>([]);
    
    const onClick = () => {
        setName('');
        setQuests([...guests, name]);
    }
    
    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {
                    guests.map(guest => (
                        <li key={guest}>{guest}</li>
                    ))
                }
            </ul>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={onClick}>Add Quest</button>
        </div>
    )
}

export default GuestList;