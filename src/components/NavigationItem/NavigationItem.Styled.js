import styled from "styled-components";

export const NavigationItemWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 3px 3px 0 0;
  border-top: 3px solid transparent;
  color: ${(props) => (props.selected ? "#24292e" : "#586069")};
  float: left;
  padding: 7px 15px 8px;
  white-space: nowrap;
  background-color: ${(props) => props.selected && "#fff"};
  border-color: ${(props) => props.selected && "#e36209 #e1e4e8 transparent"};
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

export const NavigationItemValue = styled.span`
  background-color: rgba(27, 31, 35, 0.08);
  border-radius: 20px;
  color: #000;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 2px 5px;
  margin-left: 2px;
`;

export const NavigationItemAnchor = styled.a`
  text-decoration: none;
  color: #586069;
`;
