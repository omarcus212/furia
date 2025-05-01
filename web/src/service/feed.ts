import api from "./apiConfig";

export const getPostsFeed = async () => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get(`/feed`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data;

    } catch (error) {
        return null;
    }
}