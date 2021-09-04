import styled from "styled-components";

export const AppItem = styled.div`
  position: relative;
  width: 100%;
  -webkit-transition: background 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
  box-shadow: 0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed;
`;
export const BoxIinfo = styled.div`
  transition: all 0.3s ease-in-out;
  padding: 1.5rem;
  flex: 1;
  position: relative;
  clear: both;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(244, 247, 246, 0.3);
  }
`;
export const BoxInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const BoxInfoFooter = styled.div`
  display: flex;

  ul {
    display: inline-flex;
  }

  li {
    display: inline-flex;
    align-items: baseline;
    padding: 0 1rem 0 0;
  }

  li span {
    color: ${(props) => props.theme.colors.grayDark};
  }
`;

export const Description = styled.div``;
export const TagsBox = styled.div`  
  color: ${(props) => props.theme.colors.teal};
`;
