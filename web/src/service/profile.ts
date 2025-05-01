import api from "./apiConfig";

export const myProfile = async () => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get('/myprofile', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data;

    } catch (error) {
        return null;
    }
}

export const getPostProfile = async (id: number | any) => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get(`/profile/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data;

    } catch (error) {
        return null;
    }
}

export const getPostLikedProfile = async () => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get(`/profile/post/liked`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data;

    } catch (error) {
        return null;
    }
}

export const getPostCommentedProfile = async () => {

    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error("Token não encontrado.");
        }

        const response = await api.get(`/profile/post/commented`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data;

    } catch (error) {
        return null;
    }
}
