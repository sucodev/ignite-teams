import { Container, Logo, BackIcon, BackButton} from "./styled";

import logoImg from '@assets/logo.png';
import { useNavigation } from "@react-navigation/native";

type Props = { 
    showBackButton?: boolean;
}

export function Header({showBackButton}: Props){
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.navigate('groups')
    }

    return (
        <Container>
            {showBackButton && (
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            )}
            <Logo source={logoImg} />
        </Container>
    )
}