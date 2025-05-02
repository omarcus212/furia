import { useState } from "react";
import ImageView from "../../shared/image"
import Input from "../../shared/input"
import CustomButton from "../../shared/button";

interface ModalProfileEditProps {
    isOpen: boolean,
    onClickCloseModel?: () => void,
    onClickSend?: () => void,
    formData: {
        username: string,
        bio: string,
        photo: 'man' | 'woman' | ''
    }
    onSelectPhoto: (photo: 'man' | 'woman') => void,
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ModalProfileEdit: React.FC<ModalProfileEditProps> = ({ isOpen, formData, onClickCloseModel, onInputChange, onClickSend, onSelectPhoto }) => {

    const selected = formData.photo;

    const [isModalOpen, setIsModalOpen] = useState(isOpen);


    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
                    <div className="bg-[#1E1E1E] border border-white p-4 rounded-md w-[90%] max-w-md">
                        <button onClick={onClickCloseModel} className="flex text-white w-full justify-end items-start pb-4 cursor-pointer text-lg px-6 py-2 cursor-pointe">close</button>
                        <div className="flex justify-between gap-4 mb-4">
                            <button
                                className={`border-2 rounded cursor-pointer w-48 ${selected === 'man' ? 'border-white' : 'border-transparent'}`}
                                onClick={() => onSelectPhoto('man')}>
                                <ImageView imgSrc="https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agenteman.jpeg?alt=media&token=bc980976-bc4b-47cd-8402-89c8b62fd4dc" />
                            </button>
                            <button
                                className={`border-2 rounded cursor-pointer w-48 ${selected === 'woman' ? 'border-white' : 'border-transparent'}`}
                                onClick={() => onSelectPhoto('woman')}>
                                <ImageView imgSrc="https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agentewoman.jpg?alt=media&token=0fca91ea-9e7a-4bc7-b945-be4a958640a9" />
                            </button>
                        </div>

                        <div className="space-y-3 text-white">
                            <span>
                                <Input label="Username" classNameInput="border-3 bg-white border-black h-10 rounded-lg p-3 text-black text-lg" classNameLabel="text-white text-2xl font-semibold mb-2" placeholder="Username" name="username" value={formData.username} onChange={onInputChange} />
                            </span>
                            <span>
                                <Input label="Bio" classNameInput="border-3 bg-white border-black h-10 rounded-lg p-3 text-black text-lg" classNameLabel="text-white text-2xl font-semibold mb-2" placeholder="Bio" name="bio" value={formData.bio} onChange={onInputChange} />
                            </span>
                        </div>
                    </div>

                    <div className="absolute bottom-10">
                        <CustomButton text="Save"
                            onClick={onClickSend}
                            className="bg-white text-black px-6 py-2 cursor-pointer rounded font-semibold hover:bg-gray-200 transition"
                        />
                        Enviar
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalProfileEdit