import styled from 'styled-components';

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    'header'
    'content';

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0;
    }
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    }
`

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        padding-top: 60px;
        font-weight: 500;
    }

    > p {
        font-size: 16px;
        text-align: justify;
        margin-top: 16px;
    }
`