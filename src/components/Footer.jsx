import React from "react";
import { socialMedia } from "../_Data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import {
  FooterContainer,
  SocialMediaIcons,
  IconLink,
} from "../styles/FooterStyles";

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
