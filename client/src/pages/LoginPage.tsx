import React from 'react'
import { useNavigate } from 'react-router-dom';
import { loginRequest, profileRequest } from '../api/auth';
import { useAuthStore } from '../store/auth';

function LoginPage() {
    
    const setToken = useAuthStore(state => state.setToken);
    const setProfile = useAuthStore(state => state.setProfile);

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

        const response =await loginRequest(email,password)
        setToken(response.data.token)

        const resProfile = await profileRequest()
        setProfile(resProfile.data.profile)

        navigate('/profile')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email@emal.com' />
            <input type="password" placeholder='*****' />
            <button>
                Login
            </button>
        </form>
    )
}


export default LoginPage