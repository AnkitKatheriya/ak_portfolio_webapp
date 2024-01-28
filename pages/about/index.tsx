import { About, Header, Footer } from '../../src/components'

function AboutContainer() {
    return (
        <>
            <Header>
                This is a header section
            </Header>
            <About>
                <About.Title>
                    This is an about page
                </About.Title>
            </About>
            <Footer>
                This is a footer section
            </Footer>
        </>
    )
}

export default AboutContainer