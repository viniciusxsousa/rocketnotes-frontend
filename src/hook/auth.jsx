import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { api } from '../services/index';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [ data, setData ] = useState('');

    async function signIn({ email, password }) {

        try {
            const response = await api.post('/session', { email, password });
            const {token, user} = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({token, user});

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível realizar o login. Tente novamente mais tarde.');
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({});
    }

    async function updateProfile({user, avatarFile}) {

        try {

            if(avatarFile) {
                const fileUpload = new FormData();
                fileUpload.append("avatar", avatarFile)

                const response = await api.patch("/user/avatar", fileUpload);
                user.avatar = response.data.avatar;
            }

            await api.put('user', user);
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

            setData({ user, token: data.token });
            alert('Perfil atualizado com sucesso.');

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível atualizar os dados.')
            }
        }

    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return (
        <AuthContext.Provider 
            value={{ 
                signIn, 
                user: data.user, 
                signOut,
                updateProfile
                }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };