import styled from "styled-components";

export const FooterContainer = styled.footer`
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

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #1da1f2;
  }
`;
