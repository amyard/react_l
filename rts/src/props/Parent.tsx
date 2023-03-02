import {Child, ChildAsFC} from './Child';
const Parent = () => {
    return (<>
            <Child color="red" onClick={() => console.log('aaa')}></Child>
            <ChildAsFC color="blue" onClick={() => console.log('aaa')}></ChildAsFC>
    </>)
}

export default Parent;