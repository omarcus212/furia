import { useState } from "react";

interface IInputProps {
    label: string,
    type?: string,
    placeholder?: string,
    validate?: (name?: string) => boolean
    value?: string,
    name?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<IInputProps> = ({label, type, placeholder, name, value, onChange, validate}) => {
     const [isValid, setValid] = useState(true);

    const validade = () => {
        if (!validate) return
        setValid(validate(name))
    }
    return (
        <div className= "flex flex-col w-full mb-4 p-2" >
        <label className="text-black text-2xl font-semibold mb-2" > { label } </label>
        <input
            type = { type }
            value = { value }
            onChange = { onChange }
            placeholder = { placeholder }
            name= {name}
            className = {`border-3 border-black h-10 rounded-lg p-3 text-black text-lg ${!isValid ? 'border-red' : ''}`} onBlur={validade}
        />
        </div>
    );
}

export default Input;
