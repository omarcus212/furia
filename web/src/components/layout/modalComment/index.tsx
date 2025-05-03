import CustomButton from "../../shared/button";
import Input from "../../shared/input"
import React from "react";

interface Comment {
    id: number,
    post_id: number,
    username: string,
    comment_user: string
}

interface ModalCommentProps {
    comments: Comment[];
    onClose: () => void;
    onSendComment: (text: string) => void;
}

const ModalComment: React.FC<ModalCommentProps> = ({ comments, onClose, onSendComment }) => {
    const [text, setText] = React.useState("");

    const handleSend = () => {
        if (text.trim()) {
            onSendComment(text);
            setText("");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-[#0D0D0D] border border-white rounded-lg w-[90%] max-w-[600px] h-[80%] flex flex-col relative p-6 text-white overflow-hidden">

                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-3 right-4 text-white text-xl hover:text-red-400">
                    ✕
                </button>

                <h2 className="text-2xl mb-4 font-bold">Comentários</h2>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="bg-[#1E1E1E] p-3 rounded border border-white">
                                <strong className="block mb-1">{comment.username}</strong>
                                <p>{comment.comment_user}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">Nenhum comentário ainda.</p>
                    )}
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <Input
                        type="text"
                        value={text}
                        label=""
                        name="commented"
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Digite seu comentário..."
                        classNameInput="flex-1 p-1 rounded bg-[#1E1E1E] text-white border border-white"
                    />
                    <CustomButton
                        text="Send"
                        onClick={handleSend}
                        className="bg-white cursor-pointer hover:bg-blue-700 px-4 py-2 rounded text-black"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalComment;
