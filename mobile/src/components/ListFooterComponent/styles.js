import styled, { css } from 'styled-components/native'
import General from '../../global/general'

export const Circle = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin-right: 10px;

    ${props => props.green && css`
        background-color: ${General.colors.green};
    `}

    ${props => props.blue && css`
        background-color: ${General.colors.blue};
    `}

    ${props => props.yellow && css`
        background-color: ${General.colors.yellow};
    `}

    ${props => props.red && css`
        background-color: ${General.colors.red};
    `}
`