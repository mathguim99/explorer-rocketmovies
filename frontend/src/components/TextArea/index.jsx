import { Container } from "./styles";

export default function TextArea({ icon: Icon , ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={20}/>}
            <textarea {...rest} />
        </Container>
    )
}