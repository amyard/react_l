import {useMemo, useState} from "react";

export function ListOfNumbersUseMemo() {
    // USEMEMO - using for calculation. not for simple calculation - memory lost
    const numbers = useState([10,20,30]);
    const total = useMemo(
        () => numbers.reduce((acc, number) => acc + number),
        // dependency
        numbers
    );

    const [names] = useState(["max","alex","lol","awe"]);
    // first copy the array , after sort
    // names.sort() - both arrays will be sorted
    //const sortedNames = [...names].sort();
    const sortedNames = useMemo(() => [...names].sort(), [names]);

    // Not to use for simple calculation
    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(0);
    const counts = useMemo(() => c1 + c2, [c1, c2]);

    // better use simple version
    // const counts = c1 + c2;

    return (
        <>
            <div>Total: {total}</div>
            <div>Names: {names.join(", ")}</div>
            <div>Sorted Names: {sortedNames.join(", ")}</div>

            <button onClick={() => setC1(c1 + 1)}>Count1</button>
            <button onClick={() => setC2(c2 + 1)}>Count2</button>
            <div>Counts - {counts}</div>
        </>
    )
}