import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 16px;
`