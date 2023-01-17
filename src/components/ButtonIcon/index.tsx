import { ButtonTypeStyleProps } from '@components/Button/styled';
import { TouchableOpacityProps } from 'react-native'

import { Container, Icon } from './styled'

import { MaterialIcons } from '@expo/vector-icons'


type Props = TouchableOpacityProps & { 
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props){
    return (
        <Container {...rest}>
            <Icon 
                name={icon}
                type={type}
            /> 
        </Container>
    )
}