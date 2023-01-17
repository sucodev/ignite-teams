import { Container, Logo, BackIcon, BackButton} from "./styled";

import logoImg from '@assets/logo.png';

type Props = { 
    showBackButton?: boolean;
}

export function Header({showBackButton}: Props){
    return (
        <Container>
            {showBackButton && (
            <BackButton>
                <BackIcon />
            </BackButton>
            )}
            <Logo source={logoImg} />
        </Container>
    )
}