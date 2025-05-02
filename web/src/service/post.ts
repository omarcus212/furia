import api from "./apiConfig";

const token = localStorage.getItem('token')

export const setLikedPost = async (id: number | undefined) => {
    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.post(`/liked/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data

    } catch (error) {

        return error
    }
}