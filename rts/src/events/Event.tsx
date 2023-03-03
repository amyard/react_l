const onChange = (event:  React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event)
}

const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("onDragStart")
}

const Event: React.FC = () => {
    return (<div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag me</div>
        
    </div>)
}

export default Event;