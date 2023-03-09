import { useAuth } from "../../hooks/auth";
import { useState } from 'react';

import { Container, Form, Image } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";
 
import { Link } from "react-router-dom";

export default function SignIn() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSignIn(){
        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar conta</Link>
            </Form>
            
            <Image />
        </Container>
    )
}