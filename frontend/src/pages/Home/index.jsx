import { Container, Top } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Card";

import  { FiPlus } from "react-icons/fi";


export default function Home() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    function handleMoviePreview(id){
        navigate(`/movie/${id}`);
    }

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/movies?title=${search}`)
            setMovies(response.data)
            console.log(response)
        }

        fetchMovies();
    }, [search])

    return (
        <>
            <Header 
                onChange={e => setSearch(e.target.value)}
            />

            <Container>
                <Top>
                    <h1>Meus filmes</h1>
                    <Button 
                        title="Adicionar filme" 
                        icon={FiPlus}
                        link="/createmovie"
                    />
                </Top>

                {
                    movies.map(movie => {
                        if(movie.description.length > 208){
                            movie.description = movie.description.slice(0, 208) + "..."
                        }

                        return (
                            <Card 
                                key={String(movie.id)}
                                data={movie}
                                onClick={() => handleMoviePreview(movie.id)} 
                            />
                        )
                    })
                }
            </Container>
        </>
    )
}