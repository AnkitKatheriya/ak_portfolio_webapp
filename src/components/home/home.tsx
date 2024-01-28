import {
    IHomeContainerProps,
    IHomeLogo,
    IHomeNavbar,
    IHomeNavBarContainer,
    IHomeNavBarItems,
    IHomeNavBarItem,
} from '@/types/home.types'

import {
    Container,
    Logo,
    NavBar,
    NavBarContiner,
    NavBarItems,
    NavBarItem,
} from './home.style'

const Home = ({ children, ...restProps }: IHomeContainerProps) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Home.NavBarContiner = ({ children, ...restProps }: IHomeNavBarContainer) => {
    return (
        <NavBarContiner {...restProps}>
            {children}
        </NavBarContiner>
    )
}

Home.Logo = ({ children, ...restProps }: IHomeLogo) => {
    return (
        <Logo {...restProps}>
            {children}
        </Logo>
    )
}

Home.NavBar = ({ children, ...restProps }: IHomeNavbar) => {
    return (
        <NavBar {...restProps}>
            {children}
        </NavBar>
    )
}

Home.NavBarItems = ({ children, ...restProps }: IHomeNavBarItems) => {
    return (
        <NavBarItems {...restProps}>
            {children}
        </NavBarItems>
    )
}

Home.NavBarItem = ({ children, ...restProps }: IHomeNavBarItem) => {
    return (
        <NavBarItem {...restProps}>
            {children}
        </NavBarItem>
    )
}

export default Home