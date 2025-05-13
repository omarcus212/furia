import React, { useState } from "react";
import { setChatBot } from "../../../service/chatbotService";

type Message = {
    from: "user" | "bot",
    text: string,

}

interface Ichatbot {
    onClose: () => void
}

const ChatBotModal: React.FC<Ichatbot> = ({ onClose }) => {

    const [messages, setMessages] = useState<Message[]>([])

    const options = [
        "Oi",
        "Qual seu nome?",
        "Quem é o capitão da FURIA no CS2?",
        "A FURIA tem time de Valorant?",
        "A FURIA tem time de Rainbow Six?",
        "A FURIA tem time de LoL?",
        "A FURIA já ganhou algum Major de CS2?"
    ];

    const handleSelect = async (text: string) => {
        const res = await setChatBot(text)

        setMessages((prev) => [...prev, { from: "user", text }]);
        setMessages((prev) => [...prev, { from: "bot", text: res.reply }])
    }

    return (
        <div className="fixed bottom-4 right-4 w-[320px] max-w-[90%] bg-white rounded-lg shadow-lg border z-50">
            <div className="bg-black text-white flex justify-between items-center px-4 py-2 rounded-t-lg font-bold">
                <span>ChatBot FURIA</span>
                <button
                    onClick={onClose}
                    className="text-white text-xl leading-none cursor-pointer hover:text-red-400">
                    ✕
                </button>
            </div>

            <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-lg ${msg.from === "user"
                            ? "bg-blue-100 text-right"
                            : "bg-gray-200 text-left"
                            }`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 p-3 border-t bg-gray-50">
                {options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleSelect(opt)}
                        className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition"
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    )
}


export default ChatBotModal