import api from "./api";

export const gamesPlay = async () => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get('/playgames', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;

    } catch (error) {
        return null;
    }
}
