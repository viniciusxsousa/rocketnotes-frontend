import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

    border-radius: 10px;
    margin-bottom: 8px;
    padding-right: 16px;
    
    > button {
        border: none;
        background-color: transparent;

        svg {
            color: ${({theme, isNew}) => isNew ? theme.COLORS.RED : theme.COLORS.ORANGE};
        }
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background-color: transparent;
        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

`