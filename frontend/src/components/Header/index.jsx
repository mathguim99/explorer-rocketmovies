import { Container } from "./styles";

import Input from "../Input";

export default function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Search by title" />

            <div className="profile">
                <div className="profile-info">
                    <h2>Matheus Guimarães</h2>
                    <a href="/">logout</a>
                </div>

                <img src="https://github.com/mathguim99.png" alt="Profile image of the user" />
            </div>
        </Container>
    )
}