import { Container } from "./styles";
import fullStar from "../../assets/fullstar.svg"
import emptyStar from "../../assets/emptystar.svg"


export default function Rating({number, size, ...rest}) {
    const emptyStars = 5 - number

    return (
    <Container {...rest}>
        {
            [...Array(number)]
                .map((e, i) => <img 
                    src={fullStar}
                    width={size? size : '12'}
                    key={String(i)} 
                />)
        }
        { 
            [...Array(emptyStars)]
                .map((e, i) => <img 
                    src={emptyStar}
                    width={size? size : '12'}
                    key={String(i)}  
                />)
        }
    </Container>
        
    )
}