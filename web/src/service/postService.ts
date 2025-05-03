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

export const getCommentPost = async (id: number) => {
    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.get(`/commented/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data

    } catch (error) {

        return error
    }
}

export const setCommentPost = async (id: number, commente: string) => {
    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.post(`/commented/${id}`,
            {
                comment: commente
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

export const setCraetePost = async (text: string) => {
    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.post(`/profile/post`,
            {
                content: text
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
