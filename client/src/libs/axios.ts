import axios, { AxiosHeaders } from 'axios';
import { useAuthStore } from '../store/auth';


const authApi = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials:true
})

authApi.interceptors.request.use(config => {
    const {token} = useAuthStore.getState()
    
    if (token) {
        (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
    }
    
    return config
})


export default authApi