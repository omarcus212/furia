import React, { useEffect, useState } from 'react';
import CustomButton from '../button';

interface TextareaWithButtonProps {
  label: string,
  placeholder?: string,
  onChange: (text: string) => void,
  clearSignal: boolean,
  className?: string,
}

const TextareaWithButton: React.FC<TextareaWithButtonProps> = ({ label, placeholder, onChange, clearSignal, className }) => {

  const [text, setText] = useState("");

  const handleClick = () => {
    onChange(text);
    setText(text);
  };

  useEffect(() => {
    setText("");
  }, [clearSignal]);

  return (
    <div className={className ? className : "flex flex-col space-y-2 p-6"}>
      <label className="text-white text-lg font-semibold">{label}</label>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="bg-[#1E1E1E] w-full text-white p-2 h-32 rounded-none border-none focus:outline-none"
        placeholder={placeholder}
      />
      <CustomButton onClick={handleClick} text='send' className='bg-white mt-4 w-38' />
    </div>
  );
};

export default TextareaWithButton;
