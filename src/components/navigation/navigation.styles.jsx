import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background: ${(props) => props.theme.primary};
`;

export const LogoContainer = styled.div`
  height: 60px;
  width: 60px;
  background: ${({ theme }) => theme.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
  }
`;
