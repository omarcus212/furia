import React from "react";

interface IContentProps {
    children: React.ReactNode,
    className?: string,
}


const Content: React.FC<IContentProps> = (props) => {

    return (
        <div className={`flex w-full h-full ${props.className}`}>
           {props.children}
        </div >
    )
}

export default Content;