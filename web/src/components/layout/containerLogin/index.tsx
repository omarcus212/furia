import React from "react";
import TextTittle from "../../shared/text";

interface IContainerLogin {
    children: React.ReactNode,
    className?: string,
    text?:string,
    width?: string,    
    height?: string   
}


const ContainerLogin: React.FC<IContainerLogin> = ({children, className, width, height, text }) => {

    return (
        <div className={`flex flex-col w-full h-full  ${className}`} style={{ width, height }}>
            <TextTittle className="justify-center items-center text-4xl font-bold" text={text}/>
           {children}
        </div >
    )
}

export default ContainerLogin;