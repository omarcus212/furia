import React, { useState } from 'react';
import CustomButton from '../button';

interface TextareaWithButtonProps {
  label: string,
  placeholder?: string,
  onClick: any,
}

const TextareaWithButton: React.FC<TextareaWithButtonProps> = ({ label, placeholder, onClick }) => {

  const [text, setText] = useState("");

  const handleClick = () => {
    onClick(text); 
    setText("");   
  };

  return (
    <div className="flex flex-col space-y-2 p-6">
      <label className="text-white text-lg font-semibold">{label}</label>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="bg-[#1E1E1E] w-full text-white p-2 h-32 rounded-none border-none focus:outline-none"
        placeholder={placeholder}
      />
      <CustomButton onClick={handleClick} text='send' className='bg-white w-38' />
    </div>
  );
};

export default TextareaWithButton;
