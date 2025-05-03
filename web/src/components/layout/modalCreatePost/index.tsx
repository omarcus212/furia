import React from "react"
import TextareaWithButton from "../../shared/textArea"

interface IModalCreatePost {
    onClose: () => void,
    onChangeTextArea: (text: string) => void,
    clearModal: boolean
}

const ModalCreatePost: React.FC<IModalCreatePost> = ({ clearModal, onClose, onChangeTextArea }) => {


    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="flex flex-col w-[90%] max-w-[600px] ">
                <p className="text-white text-xl cursor-pointer w-full text-right hover:text-red-400" onClick={onClose}> ✕ </p>
                <TextareaWithButton label="Criar:" className="h-full p-4 w-full bg-black border border-white rounded-lg" clearSignal={clearModal} onChange={onChangeTextArea} />
            </div>
        </div>
    )
}

export default ModalCreatePost;