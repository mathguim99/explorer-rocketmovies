import { Container, Header, Image, Form } from "./styles";

import ButtonText from "../../components/ButtonText"
import Input from "../../components/Input";
import Button from "../../components/Button";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"

export default function Profile(){
    return (
        <Container>
            <Header>
                <ButtonText 
                    title="Voltar"
                    icon={FiArrowLeft}
                    link="/"
                />
            </Header>

            <Form>
                <Image>
                    <img src="https://github.com/mathguim99.png" alt="" />
                    <label for="avatar">
                        <FiCamera />
                    </label>
                    <input type="file" id="avatar"/>
                </Image>

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
                    placeholder="Senha atual"
                    icon={FiLock}
                />

                <Input 
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                />

                <Button
                    title="Salvar"
                />
            </Form>
        </Container>
    )
}