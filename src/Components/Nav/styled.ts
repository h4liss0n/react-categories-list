import styled from "styled-components";

export const NavContainer = styled.nav`
  text-align: left;
  flex: 0;
  order: 1;
`;
export const Title = styled.h2``;

export const List = styled.ul``;

export const Item = styled.li``;

type linkProps = {
  active: boolean;
};
export const Link = styled.a<linkProps>`
  position: relative;
  display: block;
  padding: 1rem;
  font-size: 17px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
  background: ${(props) => props.theme.colors.gray};
  border-bottom: 1px solid ${(props) => props.theme.colors.borderBottom};
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${(props) =>
    props.active ? props.theme.colors.teal : props.theme.colors.black};

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    -webkit-transition: background 0.3s ease-in-out;
    transition: background 0.3s ease-in-out;
  }
`;
