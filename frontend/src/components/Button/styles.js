import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 10px;
    height: 56px;
    width: 100%;
    border: none;
    margin-top: 2.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    color: ${({theme}) => theme.COLORS.GREY_900};
    font-size: 16px;
    font-weight: bold;
`