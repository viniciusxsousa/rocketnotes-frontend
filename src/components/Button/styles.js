import styled from 'styled-components'

export const Conteiner = styled.button`
    background-color: ${({theme}) => theme.COLORS.ORANGE };
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    width: 100%;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    margin-bottom: 16px;

    &:disabled {
        opacity: 0.5;
    }
`