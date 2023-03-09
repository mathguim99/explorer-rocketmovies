import styled from "styled-components";

export const Container = styled.div`
    
`

export const Header = styled.div`
    background: ${({theme}) => theme.COLORS.CLEAR_PINK};
    height: 144px;

    display: flex;
    align-items: center;
    
    > a {
        margin-left: 144px;
    }
`

export const Form = styled.form`
    width: 24rem;
    margin: 0 auto;

    > div:nth-child(3) {
        margin-bottom: 24px;
    }

    button {
        margin-top: 24px;
    }
`

export const Image = styled.div`
    width: 186px;
    position: relative;
    margin: -84px auto 64px;
    
    > img {
        width: 186px;
        height: 186px;
        object-fit: cover;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0;
        right: 5px;

        cursor: pointer;
        transition: filter 0.5s;
        
        &:hover {
            filter: brightness(0.8);
        }
        
        > svg {
            color: ${({theme}) => theme.COLORS.BACKGROUND};
            font-size: 20px;
        }

    }
    
    > input {
        display: none;
    }
`