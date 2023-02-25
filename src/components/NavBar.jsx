import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FaRobot } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { desktop, mobile, smallMobile, tablet } from "../_Responsive";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.a`
  cursor: pointer;
  &:visited {
    color: unset;
  }
  flex: ${(props) => !props.expand && "1"};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.span`
  ${smallMobile({ display: "none" })};
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 32px;
  display: ${(props) => props.expand && "none"};
  margin: 0 auto;
  flex: 1;
`;

const ExpandedMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const ExpandedLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const NavLinksContainer = styled.div`
  ${smallMobile({ display: "none" })};
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
  color: black;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  flex: 1;
`;

const NavLink = styled.a`
  font-weight: 400;
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: unset;
  }

  &:hover {
    color: #1da1f2;
  }
`;

const NavIconsContainer = styled.div`
  ${desktop({ display: "none" })};
  flex: 1;
  color: ${(props) => props.expand && "white"};
`;

const NavIconsStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  height: "45px",
  width: "32px",
  marginRight: "0.5rem",
  cursor: "pointer",
  zIndex: 1,
};

function NavBar() {
  const [expand, setExpand] = useState(false);

  const toggleExpand = useCallback(() => {
    setExpand(!expand);
  }, [expand]);

  return (
    <Container>
      <Logo expand={expand} href="/">
        <FaRobot style={{ fontSize: "45px" }} />
      </Logo>
      <TitleContainer>
        <Title expand={expand}>SemiBot</Title>
      </TitleContainer>

      <NavIconsContainer expand={expand}>
        {expand ? (
          <CloseIcon onClick={toggleExpand} style={NavIconsStyles} />
        ) : (
          <MenuIcon onClick={toggleExpand} style={NavIconsStyles} />
        )}
      </NavIconsContainer>
      {expand ? (
        <ExpandedMenu>
          <ExpandedLinksContainer expand={expand}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/sign-in">Sign-In</NavLink>
          </ExpandedLinksContainer>
          <LogoContainer>
            <Logo expand={expand} href="/">
              <FaRobot style={{ fontSize: "45px", color: "white" }} />
            </Logo>
            <Title>SemiBot</Title>
          </LogoContainer>
        </ExpandedMenu>
      ) : (
        <NavLinksContainer>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/sign-in">Sign-In</NavLink>
        </NavLinksContainer>
      )}
    </Container>
  );
}

export default NavBar;
