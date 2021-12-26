import styled, { css } from 'styled-components/native'
import General from './general'

export const Text = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: ${General.dimens.regular_text}px;
    color: ${General.colors.dark_vine};

    ${props => props.large && css`
        font-size: ${General.dimens.large_text}px;
    `}

    ${props => props.bold && css`
        font-family: 'Montserrat-Bold';
    `}

    ${props => props.white && css`
        color: white;
    `}

    ${props => props.marginBottom && css`
        margin-bottom: ${General.dimens.mediumDistance}px;
    `}
`

export const Input = styled.TextInput`
    border-radius: ${General.dimens.radius}px;
    background-color: ${General.colors.light_gray};
    height: ${General.dimens.inputHeight}px;
    padding: 15px;
    margin-bottom: ${General.dimens.mediumDistance}px;
    font-family: 'Montserrat-Regular';
`

export const Button = styled.TouchableOpacity`
    border-radius: ${General.dimens.radius}px;
    height: ${General.dimens.inputHeight}px;
    elevation: ${General.dimens.elevation};
    background-color: white;
    align-items: center;
    justify-content: center;
    margin-bottom: ${General.dimens.regularDistance}px;

    ${props => props.purple && css`
        background-color: ${General.colors.purple};
    `}
`

export const Box = styled.View`
    ${props => props.flex1 && css`
        flex: 1;
    `}
`

