import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 7vw;

    display: flex;
    flex-direction: column;
    align-self: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
        line-height: 63px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GREY_400};
        line-height: 18px;
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        margin: 28px 0;
    }

    > button {
        margin-top: 24px;
    }

    > a {
        display: block;
        text-align: center;
        margin-top: 42px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Image = styled.div`
    flex: 1;
    background: url('src/assets/cinema.png') no-repeat center center;
    background-size: cover;
`