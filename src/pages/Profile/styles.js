import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.header`
    width: 100%;
    height: 144px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }
`

export const Form = styled.form`
    max-width: 350px;
    margin: -100px auto;

    > div:nth-child(4) {
        margin-top: 28px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 46px;
        height: 46px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 24px;
            height: 24px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`