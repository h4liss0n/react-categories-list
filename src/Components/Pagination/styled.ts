import styled from "styled-components";

export const List = styled.ul`
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-bottom: 0;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
export const Item = styled.li`
  margin-right: 0.25rem;
`;

type PropsLink = {
  active?: boolean;
};
export const Link = styled.a<PropsLink>`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.grayDark};
  padding: 0.375rem 0.4375rem;
  text-decoration: none;
  background: ${(props) =>
    props.active ? props.theme.colors.teal : props.theme.colors.gray};
`;
