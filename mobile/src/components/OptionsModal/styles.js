import styled from 'styled-components/native'
import general from '../../global/general'

export const Container = styled.View`
    flex: 1%;
    background-color: ${general.colors.black_trans};
    padding: 40px;
    padding-top: 60px;
    align-items: flex-end;
`

export const HorizontalLine = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${general.colors.light_gray2};
`