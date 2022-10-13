import { Container } from "./styles";

import { Link } from "react-router-dom";

export default function ButtonText({title, icon: Icon, link, ...rest}) {
    return (
        <Link to={link}>
            <Container 
                type="button"
                {...rest}
            >
                {Icon && <Icon size={20}/>}
                <span>{title}</span>
            </Container>
        </Link>
    )
}