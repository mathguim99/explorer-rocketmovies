import { Container } from './styles'

import { Link } from "react-router-dom";

export default function Button({title, icon: Icon, link, ...rest}) {
    return (
        <Link to={link}>
            <Container
                type="button"
                {...rest}
            >
                {Icon && <Icon size={16}/>}
                <span>{ title }</span>
            </Container>
        </Link>
    )
}