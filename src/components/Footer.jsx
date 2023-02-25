import React from "react";
import styled from "styled-components";
import { socialMedia } from "../_Data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-family: Roboto;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #1da1f2;
  }
`;

const Footer = () => {
  const { website, gitHub, linkedIn } = socialMedia;
  return (
    <FooterContainer>
      <span>© 2023</span>
      <SocialMediaIcons>
        <IconLink href={website}>
          <LanguageIcon />
        </IconLink>
        <IconLink href={gitHub}>
          <GitHubIcon />
        </IconLink>
        <IconLink href={linkedIn}>
          <LinkedInIcon />
        </IconLink>
      </SocialMediaIcons>
    </FooterContainer>
  );
};

export default Footer;
