import styled from "styled-components";

export const Container = styled.div`
    margin: 40px 123px;

    > p {
        text-align: justify;
        line-height: 21px;

        & ~ p {
            margin-top: 16px;
        }
    }
`

export const Title = styled.div`
    display: grid;
    grid-template-areas: "title rating"
    "profile date";
    width: 390px;
    row-gap: 24px;
    margin: 40px 0;

    > h1 {
        grid-area: title;

        font-size: 36px;
        font-weight: 500;
        margin-right: 19px;
    }
`

export const Profile = styled.div`
    grid-area: profile;

    display: flex;
    align-items: center;
    gap: 8px;

    > img {
        width: 16px;
        height: 16px;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_900};
        border-radius: 50%;
    }
`

export const Date = styled.div`
    grid-area: date;

    display: flex;
    align-items: center;
    gap: 8px;

    svg {
        color: ${({theme}) => theme.COLORS.PINK};
    }

`

export const Tags = styled.div`
    margin-bottom: 40px;

    > span {
        background: ${({theme}) => theme.COLORS.CLEAR_PINK};
    }
`