import React from "react";

// children - default keyword , all included components described by -children-
interface ModalProps {
    children: React.ReactNode,
    title: string
}

// <></> - special tag . need only for react to combine all tags together. will not create any additional tag in DOM
export function Modal({children, title}: ModalProps) {
    return (
        <>
            <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"/>
            <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center mb-2">{title}</h1>
                {children}
            </div>
        </>
    );
}