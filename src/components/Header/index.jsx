import { RiShutDownLine } from 'react-icons/ri';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useAuth } from '../../hook/auth';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/index'

import { Conteiner, Profile, Logout} from "./styles";

export function Header(){
    const { signOut, user } = useAuth();

    const navigator = useNavigate();

    function handleSignOut(){
        navigator('/');
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceholder

    return (
        <Conteiner>
            <Profile to='/profile'>
                <img 
                    src={avatarUrl}
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Conteiner>
    )
}