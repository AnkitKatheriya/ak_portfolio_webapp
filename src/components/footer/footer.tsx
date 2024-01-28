import { Container } from './footer.style'

const Footer = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Footer