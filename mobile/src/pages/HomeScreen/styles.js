import styled from 'styled-components/native'
import General from '../../global/general'

export const Container = styled.View`
    background-color: white;
    flex: 1;
    padding: ${General.dimens.borderPadding}px;
`

export const HorizontalLine = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${General.colors.light_gray2};
    margin: ${General.dimens.mediumDistance}px ${General.dimens.regularDistance}px; 
`