import { Container } from "./styles";

export default function ButtonText({title, icon: Icon, ...rest}) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={20}/>}
            <span>{title}</span>
        </Container>
    )
}