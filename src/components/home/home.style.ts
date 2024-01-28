import styled from "styled-components"
import { DEVICE } from "@/src/constants/constant"

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    max-width: 98%;
    margin: 0 auto;
    background-color: black;
    padding: 20px;
`
export const NavBarContiner = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    width: 100%;
    min-height: 50px;
`
export const Logo = styled.h1`
    display: flex;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    transition: width .2s, height 0.2s ease-in;

    @media ${DEVICE.TABLET} {
        width: 30px;
        height: 30px;
        font-size: 14px;
    }
`
export const NavBar = styled.nav`
    color: white;
`

export const NavBarItems = styled.ul`
    display: flex;
    flex-direction: row;

    @media ${DEVICE.TABLET_S} {
        flex-direction: column;
    }
`

export const NavBarItem = styled.li`
    margin: 0 20px;

    &:hover {
        color: red;
    }
`