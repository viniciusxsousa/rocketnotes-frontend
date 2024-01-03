import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 24px;
    border-radius: 10px;

    margin-bottom: 16px;
    border: none;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 24px;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`