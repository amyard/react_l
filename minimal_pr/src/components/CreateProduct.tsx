import React, { useState } from "react";

// дабы не перезагружалосб, нужно отменить поведение по умолчанию
export function CreateProduct(){

    const [value, setValue] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    }

    const changeHander = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" 
            placeholder="Enter product title ..." 
            value = {value} 
            // onChange={event => setValue(event.target.value)} />
            // provide onChange - to fill the input
            onChange={changeHander} />

            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
}