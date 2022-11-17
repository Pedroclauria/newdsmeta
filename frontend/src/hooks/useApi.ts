import axios from "axios";

const api = axios.create ({
    baseURL: process.env.BASE_URL
    
});


export const useApi = () => ({
    
    validateToken: async (token: string) => {
        const response = await api.post('/validate', {token})
        return response.data;
    }, 

    signin: async(email: string, password: string) => {
        const response = await api.post('/signin', {email, password});
        return response.data;
    },

    signout: async()=>{
        const response = await api.post('/logout')
    }
});