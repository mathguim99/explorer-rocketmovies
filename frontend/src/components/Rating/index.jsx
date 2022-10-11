import { Container } from "./styles";

export default function Rating({number}) {
    const emptyStars = 5 - number

    return (
    <Container>
        {
            [...Array(number)]
                .map((e, i) => <img 
                    src='src\assets\fullstar.svg'
                    width='12' 
                />)
        }
        { 
            [...Array(emptyStars)]
                .map((e, i) => <img 
                    src='src\assets\emptystar.svg'
                    width='12' 
                />)
        }
    </Container>
        
    )
}