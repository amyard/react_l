import {useEffect, useRef, useState} from "react";

const users = [
    {name:"Max", age: 20},
    {name:"Alex", age: 20},
    {name:"Lol", age: 20},
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState<string>('');
    const [user, setUser] = useState<{name: string, age:number} | undefined>();
    
    // add focus to input if we first time render the page
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    const onClick = () => {
        const foundUser = users.find((user) => {
           return user.name === name;
        });
        
        setUser(foundUser);
    }
    
    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
}

export default UserSearch;