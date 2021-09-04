import styled from "styled-components";

export const InputTextContainer = styled.input`
  font-size: 1rem;
  font-weight: 300;
  background-clip: padding-box;
  transition: all 0.2s ease;
  outline: 0;
  -webkit-appearance: none;
  width: 100%;
  resize: none;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.gray};
  margin-bottom: 2rem;

  &:hover,
  :focus {
    transition: all 0.2s ease;
    cursor: auto;
    border: 1px solid ${(props) => props.theme.colors.teal};
  }
`;
