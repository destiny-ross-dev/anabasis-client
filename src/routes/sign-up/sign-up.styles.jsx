import styled from "styled-components";

export const SignUpContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  /* height: 60vh; */
  max-height: 680px;
  width: 40vw;
  max-width: 540px;
  min-width: 300px;
  padding: 60px 20px;
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;

  p {
    margin-bottom: 10px;
  }

  img {
    width: 100px;
    margin-bottom: 20px;
  }

  button {
    background: ${(props) => props.theme.blue};
    color: white;
    width: 90%;
    border-radius: 4px;
    margin: 20px;
    padding: 12px 24px;
  }

  a {
    margin-top: 10px;
  }
`;
