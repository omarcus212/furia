import api from "./apiConfig";

const token = localStorage.getItem('token');

export const myProfile = async () => {

    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.get('/myprofile', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data

    } catch (error) {

        return null
    }
}

export const getPostProfile = async (id: number | any) => {

    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.get(`/profile/post/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data

    } catch (error) {

        return null
    }
}

export const updatePorfile = async (username: string, bio: string, photo: string) => {

    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.put('/profile',
            {
                username: username,
                bio: bio,
                profile_photo_url: photo
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data

    } catch (error) {

        return error
    }

}

export const getPostLikedProfile = async () => {

    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.get(`/profile/post/liked`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data

    } catch (error) {

        return null
    }
}

export const getPostCommentedProfile = async () => {

    try {

        if (!token) {
            throw new Error("Token não encontrado.")
        }

        const response = await api.get(`/profile/post/commented`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },);

        return response.data

    } catch (error) {

        return null

    }
}
