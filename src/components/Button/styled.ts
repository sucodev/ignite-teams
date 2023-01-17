import styled, {css} from "styled-components/native";

import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = { 
    type: ButtonTypeStyleProps
    disabled?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    flex:1;   
    min-height: 56px;
    max-height: 56px;
    background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    border-radius:6px;
    justify-content:center;
    align-items:center;
    
    ${({disabled}) => disabled && css`
    background-color: 'color-when-is-disabled';
    `}
`

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`