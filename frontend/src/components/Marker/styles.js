import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme, isNew}) => isNew? 'transparent' : theme.COLORS.GREY_900};
    padding: 0 16px;
    border-radius: 10px;
    font-size: 12px;
    margin-right: 8px;
    border: ${({theme, isNew}) => isNew? `2px dashed ${theme.COLORS.GREY_600}` : "none"};

    display: flex;
    align-items: center;


    > button {
        background: none;

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 22px;
        }
    }

    > input {
        background: none;
        outline: none;
        border: none;
        width: 100%;
        height: 56px;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GREY_600};
        }
    }
`