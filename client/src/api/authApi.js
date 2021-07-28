import axiosClient from 'api/axiosClient';

const authApi = {
    login: async (params) => {
        const res = await axiosClient.post('/login', params);
        return res;
    },
    refreshToken: async () => {
        const res = await axiosClient.post('/refresh-token');
        return res;
    }
};

export default authApi;