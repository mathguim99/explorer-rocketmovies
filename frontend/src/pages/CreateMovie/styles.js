import styled from "styled-components";

export const Container = styled.form`
    margin: 40px 126px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
    }

    > h2 {
        font-size: 20px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.DARK_WHITE};
    }
`

export const TopInputs = styled.div`
    display: flex;
    gap: 40px;
`

export const Markers = styled.div`
    background: ${({theme}) => theme.COLORS.BLACK};
    border-radius: 8px;
    padding: 16px;

    display: flex;
`

export const DownButtons = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 16px;

    > a {
        width: 100%;
        height: 56px;
        border-radius: 10px;
        
        color: ${({theme}) => theme.COLORS.PINK};
        font-weight: 500;
        text-align: center;
    }

    > a:nth-child(1) {
        background: ${({theme}) => theme.COLORS.BLACK};
        padding-top: 17px;
    }
`