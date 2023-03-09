import { Container } from "./styles";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import Input from "../Input";

import { Link, useNavigate } from "react-router-dom";

export default function Header({ onChange, ...rest }){
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut(){
        navigate("/")
        signOut()
    }

    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input 
                placeholder="Search by title"
                onChange={onChange}
            />

            <div className="profile">
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <a onClick={handleSignOut}>logout</a>
                </div>
                
                <Link to="/profile">
                    <img src={avatarUrl} alt={user.name}/>
                </Link>
            </div>
        </Container>
    )
}