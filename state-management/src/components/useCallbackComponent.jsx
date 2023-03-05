import {useCallback, useMemo, useState} from "react";

function SortedListForUseCallback({list, sortFunc}) {
    // runned as many as current component if rendering
    console.log("SortedListForUseCallback render.")

    const sortedList = useMemo(() => {
        // will run only twice --> because of using react 18
        console.log("Running sort");
        return [...list].sort(sortFunc);
    }, [list, sortFunc]);
    return <div>{sortedList.join(", ")}</div>
}

export function SortListForUseCallback() {
    const [c3, setC3] = useState(0);
    const [names] = useState(["max","alex","lol","awe"]);

    // if we need to create a sorted array which didn't change to reduce amount of calls
    const sortFunc = useCallback((a, b) => a.localeCompare(b), []);
    // inverse sorting
    // const sortFunc = (a, b) => a.localeCompare(b) * -1;

    return <>
        <button onClick={() => setC3(c3 + 1)}>Click me</button>
        <SortedListForUseCallback list={names} sortFunc={sortFunc} />
    </>
}