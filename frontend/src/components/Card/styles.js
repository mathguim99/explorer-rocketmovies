import styled from "styled-components";

export const Container = styled.section`
    background: ${({theme}) => theme.COLORS.CLEAR_PINK};
    padding: 32px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 24px;

    cursor: pointer;

    :hover {
        filter: brightness(1.2);
        scale: 0.97;
        transition: all 1s;
    }

    > h3 {
        font-size: 24px;
    }

    > p {
        color: ${({theme}) => theme.COLORS.DARK_WHITE};
        text-align: justify;
    }

    .tags {
        margin-top: 15px;
    }
`