import { Container } from './styles'

export default function Button({title, icon: Icon, ...rest}) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {Icon && <Icon size={16}/>}
            <span>{ title }</span>
        </Container>
    )
}