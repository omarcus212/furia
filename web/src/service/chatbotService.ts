import api from "./apiConfig";

const token = localStorage.getItem('token')

export const setChatBot = async (text: string) => {
    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.post(`/chatbot`,
            {
                question: text
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

        return response.data

    } catch (error) {

        return error
    }
}
