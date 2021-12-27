import styled from 'styled-components/native'
import general from '../../global/general'

export const Container = styled.View`
    background-color: white;
    flex: 1;
    padding: ${general.dimens.mediumDistance}px;
`

export const Circle = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border-width: 5px;
    border-style: dashed;
    border-color: ${general.colors.blue};
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`