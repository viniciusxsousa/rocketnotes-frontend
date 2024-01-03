import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 152px;

    border: none;
    border-radius: 10px;
    resize: none;
    padding: 16px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`