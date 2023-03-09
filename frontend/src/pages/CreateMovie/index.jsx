import { Container, TopInputs, Markers, DownButtons } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";

import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Marker from "../../components/Marker";

import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function CreateMovie(){
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(0)
    const [description, setDescription] = useState("")
    const [markers, setMarkers] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    const navigate = useNavigate();

    function handleAddMarker(){
        if(newMarker == "" || markers.includes(newMarker)){
            return
        }
        
        setMarkers(prevState => [...prevState, newMarker])
        setNewMarker("")
    }

    function handleRemoveMarker(deleted){
        setMarkers(prevState => prevState.filter(marker => marker !== deleted))
    }

    async function handleNewMovie(){
        if(!title){
            return alert("Adicione um título!")
        }

        if(!rating){
            return alert("Selecione uma nota!")
        }

        if(newMarker){
            return alert("Confirme a adição do marcador.")
        }
        
        const response = await api.post("/movies", {
            title,
            rating,
            description,
            tags: markers
        })

        alert("Nota criada com sucesso.")
        navigate("/")
    }

    return (
        <>
            <Header />

            <Container>

                <ButtonText
                    title="Voltar"
                    icon={FiArrowLeft}
                    link="/"
                />

                <h1>Novo filme</h1>

                <TopInputs>
                    <Input 
                        type="text"
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input 
                        type="number"
                        placeholder="Sua nota (de 0 a 5)"
                        min="0"
                        max="5"
                        onChange={e => setRating(e.target.value)}
                    />
                </TopInputs>

                <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                />

                <h2>Marcadores</h2>
                <Markers>
                    {
                        markers.map((marker, index) => (
                            <Marker 
                                key={String(index)}
                                value={marker}
                                onClick={() => handleRemoveMarker(marker)}
                            />
                        ))
                    }
                    <Marker 
                        isNew
                        value={newMarker}
                        onChange={e => setNewMarker(e.target.value)}
                        onClick={handleAddMarker}
                    />
                </Markers>

                <DownButtons>
                    <Link to="/">Excluir filme</Link>
                    <Button title="Salvar alterações" onClick={handleNewMovie}/>
                </DownButtons>
                
            </Container>
        </>
    )
}