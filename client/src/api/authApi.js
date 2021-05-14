import axiosClient from 'api/axiosClient';

const authApi = {
    login: (params) => {
        const url = "/login";
        
        return axiosClient.post(url, params);
    },
};

export default authApi;