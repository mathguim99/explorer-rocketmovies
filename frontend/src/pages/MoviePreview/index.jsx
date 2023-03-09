import { Container, Buttons, Title, Profile, Date, Tags } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import Header from "../../components/Header";
import ButtonText from "../../components/ButtonText";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";

import {FiArrowLeft, FiClock, FiX} from "react-icons/fi";

export default function MoviePreview() {
    const [data, setData] = useState(null)
    
    const {user} = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const params = useParams()
    const navigate = useNavigate();

    async function handleDelete(){
        const confirm = window.confirm("Deseja excluir a nota?");

        if (confirm) {
            await api.delete(`/movies/${params.id}`)
            navigate("/");
        }
    }

    useEffect(() => {
        async function fetchMovie(){
            const response = await api.get(`/movies/${params.id}`)
            setData(response.data)
        }

        console.log(data)
        fetchMovie()
    }, []);

    return (
        <>
        <Header />

        {   
            data &&
            <Container>
                
                <Buttons>
                    <ButtonText
                        title="Voltar"
                        icon={FiArrowLeft}
                        link={"/"}
                    />

                    <ButtonText
                        title="Excluir"
                        icon={FiX}
                        onClick={handleDelete}
                    />
                </Buttons>

                <Title>
                    <h1>{data.title}</h1>

                    <Rating
                        number={data.rating}
                        size={22}
                    />
                    
                    <Profile>
                        <img 
                            src={avatarUrl}
                            alt="" 
                        />
                        <span>Por {user.name}</span>
                    </Profile>

                    <Date>
                        <FiClock />
                        <span>{data.updated_at}</span>
                    </Date>
                </Title>
                
                {   
                    data.tags &&
                    <Tags>
                        {
                            data.tags.map(tag => (
                                <Tag key={String(tag.id)} title={tag.name}/>
                            ))
                        }
                    </Tags>
                }

                {
                    data.description &&
                    <p>{data.description}</p>
                }
            </Container>
        }       
        </>
    )
}