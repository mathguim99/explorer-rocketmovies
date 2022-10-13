import { Container } from "./styles";

export default function Rating({number, size, ...rest}) {
    const emptyStars = 5 - number

    return (
    <Container {...rest}>
        {
            [...Array(number)]
                .map((e, i) => <img 
                    src='src\assets\fullstar.svg'
                    width={size? size : '12'} 
                />)
        }
        { 
            [...Array(emptyStars)]
                .map((e, i) => <img 
                    src='src\assets\emptystar.svg'
                    width={size? size : '12'} 
                />)
        }
    </Container>
        
    )
}