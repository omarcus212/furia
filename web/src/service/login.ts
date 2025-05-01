import api from "./apiConfig";

export const login = async (email: string, password: string) => {

    try {
        const response = await api.post('/login', {
            email,
            password,
        });

        const token = response.data.message;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        return null;
    }
}

export const register = async (username: string, email: string, password: string) => {

    try {
        const response = await api.post('/register', {
            username,
            email,
            password,
        });

        const data = response.data;
        return data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
    }
}