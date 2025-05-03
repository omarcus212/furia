import { useState } from "react";

interface IInputProps {
    label: string,
    type?: string,
    placeholder?: string,
    value?: string,
    name?: string,
    validate?: (name?: string) => boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    classNameInput?: string,
    classNameLabel?: string
}

const Input: React.FC<IInputProps> = ({ label, type, placeholder, name, value, classNameInput, classNameLabel, onChange, validate }) => {

    const [isValid, setValid] = useState(true);

    const validade = () => {

        if (!validate) return
        setValid(validate(name))
    }

    return (
        <div className="flex flex-col w-full mb-4 p-2" >
            <label className={classNameLabel || "text-black text-2xl font-semibold mb-2"}> {label} </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                className={classNameInput || "border-3 border-black h-10 rounded-lg p-3 text-black text-lg"} onBlur={validade}
            />
        </div>
    );
}

export default Input;
