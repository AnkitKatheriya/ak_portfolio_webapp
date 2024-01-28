import { Container } from './header.style'

const Header = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Header