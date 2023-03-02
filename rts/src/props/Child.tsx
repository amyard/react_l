interface ChildProps {
    color: string;
    onClick: () => void;
    childre?: React.ReactNode;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        There here.
        <button onClick={onClick}>Click me</button>
    </div>
}

// FC doesn't need children parameter in interface
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div>
        There here.
        <button onClick={onClick}>Click me</button>
    </div>
}
