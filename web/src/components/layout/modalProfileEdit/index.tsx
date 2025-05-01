import { useState } from "react";
import ImageView from "../../shared/image"
import Input from "../../shared/input"
import CustomButton from "../../shared/button";
const imgman = 'https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agenteman.jpeg?alt=media&token=bc980976-bc4b-47cd-8402-89c8b62fd4dc'
const imgwoman ='https://firebasestorage.googleapis.com/v0/b/callofduty-ed1bf.appspot.com/o/agentewoman.jpg?alt=media&token=0fca91ea-9e7a-4bc7-b945-be4a958640a9'

interface ModalProfileEditProps {
  isOpen: boolean,
}

const ModalProfileEdit: React.FC<ModalProfileEditProps> = ({isOpen}) =>{

    const [isModalOpen, setIsModalOpen] = useState(true);

    const [selected, setSelected] = useState<number | null>(null);

    const [name, setName] = useState('');

    const [bio, setBio] = useState('');


const handleSubmit = () => {
  console.log({ selected, name, bio });
  setIsModalOpen(false);
};

const close = () => {
  setIsModalOpen(false);
};

    return (
        <>
           {isModalOpen && (
                  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="bg-[#1E1E1E] border border-white p-4 rounded-md w-[90%] max-w-md">
                <button onClick={close} className="flex text-white w-full justify-end items-start pb-4 cursor-pointer text-lg px-6 py-2 cursor-pointe">close</button>
            <div className="flex justify-between gap-4 mb-4">
            <button
                className={`border-2 rounded w-48 ${selected === 1 ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelected(1)}>
                <ImageView imgSrc={imgman} />
                </button>
                <button
                className={`border-2 rounded w-48 ${selected === 2 ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelected(2)}>
                <ImageView imgSrc={imgwoman} />
                </button>
            </div>

            <div className="space-y-3 text-white">
                <span>
                <Input label="Username" classNameInput="border-3 bg-white border-black h-10 rounded-lg p-3 text-black text-lg" classNameLabel="text-white text-2xl font-semibold mb-2" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                </span>
                <span>
                 <Input label="Bio" classNameInput="border-3 bg-white border-black h-10 rounded-lg p-3 text-black text-lg" classNameLabel="text-white text-2xl font-semibold mb-2" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                </span>
            </div>
            </div>

            <div className="absolute bottom-5">
            <CustomButton text="send"
                onClick={handleSubmit}
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