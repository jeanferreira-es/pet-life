import styled, { css } from 'styled-components/native'
import General from './general'

export const Text = styled.Text`
    font-family: 'Montserrat-Regular';
    font-size: ${General.dimens.regular_text}px;
    color: ${General.colors.black};
    text-align: justify;

    ${props => props.xLarge && css`
        font-size: ${General.dimens.xLargeText}px;
    `}

    ${props => props.large && css`
        font-size: ${General.dimens.large_text}px;
    `}

    ${props => props.small && css`
        font-size: ${General.dimens.small_text}px;
    `}

    ${props => props.bold && css`
        font-family: 'Montserrat-Bold';
    `}

    ${props => props.white && css`
        color: white;
    `}

    ${props => props.purple && css`
        color: ${General.colors.purple};
    `}

    ${props => props.gray && css`
        color: ${General.colors.dark_gray};
    `}

    ${props => props.marginBottomSmall && css`
        margin-bottom: ${General.dimens.smallDistance}px;
    `}

    ${props => props.marginBottomRegular && css`
        margin-bottom: ${General.dimens.regularDistance}px;
    `}

    ${props => props.marginBottomMedium && css`
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
    elevation: 1;
    color: ${General.colors.black};
`

export const Button = styled.TouchableOpacity`
    border-radius: ${General.dimens.radius}px;
    height: ${General.dimens.inputHeight}px;
    elevation: ${General.dimens.elevation};
    background-color: white;
    align-items: center;
    justify-content: center;

    ${props => props.purple && css`
        background-color: ${General.colors.purple};
    `}

    ${props => props.lightPurple && css`
        background-color: ${General.colors.light_purple};
    `}

    ${props => props.black && css`
        background-color: ${General.colors.black};
    `}

    ${props => props.marginTop && css`
        margin-top: ${General.dimens.regularDistance}px;
    `}

    ${props => props.marginBottom && css`
        margin-bottom: ${General.dimens.regularDistance}px;
    `}
`

export const Box = styled.View`
    ${props => props.flex1 && css`
        flex: 1;
    `}

    ${props => props.verticalAlign && css`
        justify-content: center;
    `}

    ${props => props.horizontalAlign && css`
        align-items: center;
    `}

    ${props => props.marginTopLarge && css`
        margin-top: ${General.dimens.largeDistance}px;
    `}

    ${props => props.row && css`
        flex-direction: row;
    `}

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}

    ${props => props.spaceAround && css`
        justify-content: space-around;
    `}

    ${props => props.marginBottom && css`
        margin-bottom: ${General.dimens.regularDistance}px;
    `}
`

export const Card = styled.View`    
    border-radius: ${General.dimens.radius}px;
    padding: ${General.dimens.mediumDistance}px;
    background-color: white;

    ${props => props.shadow && css`
        elevation: ${General.dimens.elevation};
    `}

    ${props => props.green && css`
        background-color: ${General.colors.green};
    `}

    ${props => props.blue && css`
        background-color: ${General.colors.blue};
    `}

    ${props => props.yellow && css`
        background-color: ${General.colors.yellow};
    `}

    ${props => props.row && css`
        flex-direction: row;
    `}

    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}

    ${props => props.v10h15 && css`
        padding: ${General.dimens.smallDistance}px ${General.dimens.mediumDistance}px;
    `}
    
    ${props => props.verticalAlign && css`
        justify-content: center;
    `}

    ${props => props.horizontalAlign && css`
        align-items: center;
    `}

    ${props => props.marginBottom && css`
        margin-bottom: ${General.dimens.regularDistance}px;
    `}

    ${props => props.lineBorder && css`
        border-width: 1px;
        border-color: ${General.colors.gray};
    `}

    ${props => props.lineBorderDashed && css`
        border-width: 1px;
        border-color: ${General.colors.gray};
        border-style: dashed;
    `}

    ${props => props.regularPadding && css`
        padding: ${General.dimens.regularDistance}px;
    `}

    ${props => props.topBar && css`
        border-top-width: 15px;
        border-top-color: violet;
        border-top-style: solid;
    `}

`

