import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { api } from "../../services"

import { Conteiner, Links, Content } from "./styles" 


import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from '../../components/Tag'
import { ButtonText } from "../../components/ButtonText"

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const navigator = useNavigate();

    function handleBack() {
        navigator(-1);
    }

    async function handleRemove() {
        const confirmation = confirm('Você tem certeza que deseja excluir essa nota ?');

        if(confirmation) {
          await api.delete(`/note/${params.id}`);
          handleBack();     
        }
    } 

    useEffect(() => {
        async function loadNote() {
            const response = await api.get(`/note/${params.id}`);
            setData(response.data);
        }

        loadNote();
    }, [])

    return (
        <Conteiner>

            <Header></Header>

            {
                data && 
                <main>
                    <Content>

                        <ButtonText title="Excluir Nota" onClick={handleRemove}/>

                        <h1>{data.title}</h1>
                        <p>{data.description}</p>

                        {
                            data.links && 
                            <Section title='Links úteis'>
                                <Links>
                                    {data.links.map( (link) => (
                                        <li key={String(link.id)}>
                                            <a href={link.url} target='_black'>{link.url}</a>
                                        </li>
                                    ))}
                                </Links>
                            </Section>
                        }

                        {
                            data.tags && 
                            <Section title='Marcadores'>
                                {data.tags.map((tag) => (
                                    <Tag key={tag.id} title={tag.name}/>
                                ))}
                            </Section>
                        }

                        <Button title="Voltar" onClick={handleBack}/>

                    </Content>
                </main>
            }

        </Conteiner>
    )
}