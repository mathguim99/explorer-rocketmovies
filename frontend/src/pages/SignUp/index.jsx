import { Container, Form, Image } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                />
                
                <Input 
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                />

                <Input 
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                />

                <Button title="Cadastrar" type="submit"/>

                <Link to="/">{FiArrowLeft()} Voltar para o login</Link>
            </Form>
            
            <Image />
        </Container>
    )
}