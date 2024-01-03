import styled from 'styled-components'

import backgroundImg from '../../assets/background.png' 

export const Container = styled.div`
    display: flex;
    height: 100vh;

    align-items: stretch;
`

export const Background = styled.div`
    flex: 1;
    background-image: url(${backgroundImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: red;
`

export const Forms = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE}
    }

    > h2 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-top: 84px;
        margin-bottom: 24px;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) =>  theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`