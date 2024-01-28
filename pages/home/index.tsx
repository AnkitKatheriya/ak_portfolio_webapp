import Home from "@/src/components/home/home"

function HomeContainer() {
  return (
    <Home>
      <Home.NavBarContiner>
        <Home.Logo>AK</Home.Logo>
        <Home.NavBar>
          <Home.NavBarItems>
            <Home.NavBarItem>
              Home
            </Home.NavBarItem>
            <Home.NavBarItem>
              About
            </Home.NavBarItem>
            <Home.NavBarItem>
              Service
            </Home.NavBarItem>
            <Home.NavBarItem>
              Projects
            </Home.NavBarItem>
            <Home.NavBarItem>
              Contact me
            </Home.NavBarItem>
          </Home.NavBarItems>
        </Home.NavBar>
      </Home.NavBarContiner>
    </Home>
  )
}

export default HomeContainer