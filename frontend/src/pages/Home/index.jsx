import { Container, Top } from "./styles";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Card";


import  { FiPlus } from "react-icons/fi";

export default function Home() {
    return (
        <>
            <Header />

            <Container>
                <Top>
                    <h1>Meus filmes</h1>
                    <Button 
                        title="Adicionar filme" 
                        icon={FiPlus}
                        link="/createmovie"
                    />
                </Top>

                <Card data={
                    {
                    title: "Os Três Mosqueteiros",
                    rating: 4,
                    description: 'Loucuras',
                    tags: [
                        {name: 'Aventura',
                        key: 1},
                        {name: 'Ação',
                        key: 2},
                    ]
                    }
                }/>

                <Card data={
                    {
                    title: "Os Três Mosqueteiros",
                    rating: 5,
                    description: 'Loucuras',
                    tags: [
                        {name: 'Aventura',
                        key: 1},
                        {name: 'Ação',
                        key: 2},
                    ]
                    }
                }/>

                <Card data={
                    {
                    title: "Os Três Mosqueteiros",
                    rating: 3,
                    description: 'Loucuras',
                    tags: [
                        {name: 'Aventura',
                        key: 1},
                        {name: 'Ação',
                        key: 2},
                    ]
                    }
                }/>
            </Container>
        </>
    )
}