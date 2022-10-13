import { Container, TopInputs, Markers, DownButtons } from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Marker from "../../components/Marker";

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CreateMovie(){
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
                    />

                    <Input 
                        type="number"
                        placeholder="Sua nota (de 0 a 5)"
                        min="0"
                        max="5"
                    />
                </TopInputs>

                <TextArea 
                    placeholder="Observações"
                />

                <h2>Marcadores</h2>
                <Markers>
                    <Marker 
                        value="React"
                    />
                    <Marker 
                        isNew
                    />
                </Markers>

                <DownButtons>
                    <Link to="/">Excluir filme</Link>
                    <Button title="Salvar alterações" />
                </DownButtons>
                
            </Container>
        </>
    )
}