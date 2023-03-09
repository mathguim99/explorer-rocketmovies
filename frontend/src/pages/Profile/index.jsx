import { Container, Header, Image, Form } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import ButtonText from "../../components/ButtonText"
import Input from "../../components/Input";
import Button from "../../components/Button";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi"

export default function Profile(){
    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    console.log(user.avatar)

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordOld,
            new_password: passwordNew
        }

        const userUpdated = Object.assign(user, updated)
        
        await updateProfile({ user: userUpdated, avatarFile })
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

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
                    <img src={avatar} alt="Foto do usuário" />
                    <label for="avatar">
                        <FiCamera />
                    </label>
                    <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                </Image>

                <Input 
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type="password"
                    placeholder="Senha atual"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    type="password"
                    placeholder="Nova senha"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    )
}