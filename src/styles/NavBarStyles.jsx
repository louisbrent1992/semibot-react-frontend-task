import styled from "styled-components";
import { desktop, mobile, smallMobile, tablet } from "../_Responsive";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Logo = styled.a`
  cursor: pointer;
  &:visited {
    color: unset;
  }
  flex: ${(props) => !props.expand && "1"};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.span`
  ${smallMobile({ display: "none" })};
  font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 32px;
  display: ${(props) => props.expand && "none"};
  margin: 0 auto;
  flex: 1;
`;

export const ExpandedMenu = styled.div`
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

export const ExpandedLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const NavLinksContainer = styled.div`
  ${smallMobile({ display: "none" })};
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
  color: black;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  flex: 1;
`;

export const NavLink = styled.a`
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

export const NavIconsContainer = styled.div`
  ${desktop({ display: "none" })};
  flex: 1;
  color: ${(props) => props.expand && "white"};
`;

export const NavIconsStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  height: "45px",
  width: "32px",
  marginRight: "0.5rem",
  cursor: "pointer",
  zIndex: 1,
};
