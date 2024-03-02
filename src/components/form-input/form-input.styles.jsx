import styled from "styled-components";

export const FormInputContainer = styled.div`
  border: 1px solid ${(props) => props.theme.black};
  width: 90%;
  height: 40px;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 4px;
  position: relative;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.primary};
  }

  i,
  svg {
    color: ${(props) => props.theme.primary};
    position: absolute;
    top: 10px;
  }
`;

export const Input = styled.input`
  border: none;
  width: 90%;
  padding: 5px;
  margin-left: 20px;
  background:${({ theme }) => theme.white}

  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus, 
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  
    &:focus {
    outline: none;
  }
`;
