import { useEffect, useState } from 'react'

import { api } from '../../services/index'

import { useNavigate } from 'react-router-dom'

import { Container,  Brand, Menu, Search, Content, NewNote} from './styles'

import {ButtonText} from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { FiPlus, FiSearch} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState('');
    const [notes, setNotes] = useState([]);

    const navigator = useNavigate();

    function handleTagSelected(tagName) {
        const alredyTag = tagsSelected.includes(tagName);

        if(alredyTag) {
            const tagsFilter = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(tagsFilter);
        } else {
            setTagsSelected(prevState => [...prevState, tagName]);
        }

    }

    function handleDetails(id) {
        navigator(`/details/${id}`);
    }
    
    useEffect(() => {

        async function loadTags() {
           const response =  await api.get('/tags');

           setTags(response.data);
        }

        loadTags();

    }, [])

    useEffect(() => {
        async function loadNotes() {
            const response = await api.get(`/note?title=${search}&tags=${tagsSelected}`);

            setNotes(response.data);
        }

        loadNotes()
    }, [tagsSelected, search])


    return (
        <Container>

            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header></Header>

            <Menu>

                <li>
                    <ButtonText 
                        title='Todos' 
                        onClick={() => setTagsSelected([])}
                        isActived={tagsSelected.length === 0}
                    />
                </li>

                { tags && tags.map( tag => (
                    <li key={String(tag.id)} >
                        <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)}
                            isActived={tagsSelected.includes(tag.name)}
                        />
                    </li>
                )) }

            </Menu>

            <Search>
                <Input 
                    icon={FiSearch} 
                    placeholder='Pesquise pelo título'
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minha notas">
                    { 
                        notes.map( (nota) => 
                        (<Note 
                            data={nota}
                            onClick={()=> { handleDetails(nota.id) }}
                        />) 
                        ) 
                    }
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus/>
                Criar nota
            </NewNote>

        </Container>
    )
}