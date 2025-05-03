import React from "react";

interface ITextTittle {
    className?: string,
    text?: string,
}


const TextTittle: React.FC<ITextTittle> = ({ className, text }) => {

    return (

        <h2 className={`flex flex-wrap w-full ${className}`}>{text}</h2>
    )
}

export default TextTittle;