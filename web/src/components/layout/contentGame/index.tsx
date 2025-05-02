import React from "react";
import TextTittle from "../../shared/text";
import TableComponent from "../../shared/table";
import TextareaWithButton from "../../shared/textArea";

interface IContentGame {
    className?: string,
    onClick?: () => void
}


const ContentGame: React.FC<IContentGame> = ({onClick}) => {

    return (
      
            <div className="flex flex-col w-[90%] mt-8">
                <span className="flex w-full bg-blue border-b border-white mb-6">
                    <TextTittle text="Jogos e Sugestão" className="text-[36px] w-full text-white border-b border-white inline-block"/>
                </span>
                
                 <div className="w-full">
                   <TableComponent/>
                 </div>

                 <div className="flex flex-col w-full mt-16">
                   <TextareaWithButton label="Sugestão" onClick={onClick}/>
                 </div>
            </div>
    )
}

export default ContentGame;