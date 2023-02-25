import React, { useCallback, useState } from "react";
import { FaRobot } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  Container,
  LogoContainer,
  Logo,
  TitleContainer,
  Title,
  ExpandedLinksContainer,
  ExpandedMenu,
  NavIconsContainer,
  NavLink,
  NavLinksContainer,
  NavIconsStyles,
} from "../styles/NavBarStyles";

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
