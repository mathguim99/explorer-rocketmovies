import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    gap: 64px;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GREY_900};
    padding: 30px 123px;

    h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    
    .profile {
        display: flex;
        align-items: center;
        gap: 9px;

        a {
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.GREY_600};
        }

        .profile-info {
            text-align: right;
            font-size: 14px;
            width: max-content;
        }

        > img {
            width: 64px;
            height: 64px;
            border-radius: 50%
        }
    }
`