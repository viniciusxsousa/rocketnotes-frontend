import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/index'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import {Container, Form} from './styles'

export function New(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigator = useNavigate();

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(remove) {
        setLinks(prevState => prevState.filter(link => link !== remove));
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(remove) {
        setTags(prevState => prevState.filter(tag => tag !== remove));
    }

    async function handleNewNote() {
        if(!title) {
            return alert('Título é obrigatório.');
        }

        if(newLink) {
            return alert('Você digitou um link, mas não salvou. Deseja salvar ? ');
        }

        if(newTag) {
            return alert('Você digitou uma tag, mas não salvou. Deseja salvar ?')
        }

        await api.post('/note', {
            title,
            description,
            tags,
            links
        });

        alert('Nota cadastrada com sucesso!');
        navigator(-1);
    }


    return(
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>

                    <Input 
                        placeholder='Título'
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                        placeholder='Observações' 
                        onChange={e => setDescription(e.target.value)}
                    />
                        
                    <Section title='Links úteis'>
                        {links.map((link, index) => (
                            <NoteItem 
                                key={String(index)} 
                                value={link}
                                onClick={() => handleRemoveLink(link)} 
                            />
                        ))}
                        <NoteItem 
                            isNew 
                            placeholder='Novo link'
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title='Marcadores'>
                        <div className='tags'>

                            {tags.map( (tag, index) => (
                                <NoteItem 
                                    key={String(index)} 
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))}
                            
                            <NoteItem 
                                isNew 
                                placeholder='Novo marcador'
                                value={newTag}
                                onChange={ e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title='Salvar' onClick={handleNewNote}/>

                </Form>
            </main>
        </Container>
    )
}