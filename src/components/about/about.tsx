import { Container, Title } from "./about.style";

const About = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

About.Title = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <Title>
            {children}
        </Title>
    )
}
export default About