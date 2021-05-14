// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import { BASE_URL } from 'constants/baseUrl'


const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});


axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    //const token = await getFirebaseToken();
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;