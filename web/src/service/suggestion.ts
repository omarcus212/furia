import api from "./apiConfig";

export const setSuggestion = async (text: string) => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.post('/suggestion',
            {
                text: text,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;

    } catch (error) {
        return null;
    }
}
