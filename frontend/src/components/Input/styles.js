import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.GREY_800};
    border-radius: 10px;
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;

    margin-top: 8px;
    
    > input {
        background-color: transparent;
        width: 100%;
        height: 56px;
        border: none;
        outline: none;
        padding: 16px;

        &::placeholder {
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.GREY_600};
        }
    }

    > svg {
        margin-left: 17px;
        color: ${({theme}) => theme.COLORS.GREY_600};
    }
`