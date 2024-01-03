import { useState } from 'react'
import { api } from '../../services/index'

import { Container, Background, Forms } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiUser, FiLock } from 'react-icons/fi'

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password) {
            return alert('Todos os campos devem ser preenchidos.');
        }

       api.post('/user', {name, email, password})
        .then(() => {
            alert('Conta criada com sucesso');
            navigate("/");
        })
        .catch((error) => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível criar sua conta neste momento.')
            }
        })
    }

    return(
        <Container>
            <Background/>

            <Forms>

                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    icon={FiUser} 
                    placeholder='Nome'
                    type="text"
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    icon={FiMail}
                    placeholder='E-mail'
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    icon={FiLock}
                    placeholder='Senha'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title='Cadastrar' onClick={handleSignUp}/>

                <Link to='/'>Voltar para o login</Link>

            </Forms>


        </Container>
    )
}