import api from "./apiConfig";

export const setLikedPost = async (id: number | undefined) => {
    try {

        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.post(`/liked/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data;

    } catch (error) {
        return error;
    }
}