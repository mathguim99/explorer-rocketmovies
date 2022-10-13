import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export default function Marker({isNew, value, onClick, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                placeholder="Novo marcador"
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
            >
                {isNew? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}