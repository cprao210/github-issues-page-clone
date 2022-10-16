import styled from "styled-components";

export const DetailContainer = styled.div`
  display: inline-block;
  margin: 7px 5px;
  font-size: 12px;
  border-collapse: collapse;

  @media (max-width: 820px) {
    margin: 15px 0px;
  }
`;

export const DetailTagContainer = styled.a`
  border: 1px solid #cdcfd1;
  border-width: 1px 0px 1px 1px;
  text-decoration: none;
  padding: ${(prop) => prop.padding};
  border-radius: 2px 0px 0px 2px;
  background-color: ${(prop) => prop.backgroundColor};
  line-height: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #586069;
  &:hover {
    background-color: ${(prop) => prop.backgroundColor};
  }
`;

export const DetailValueContainer = styled.a`
  border: 1px solid #cdcfd1;
  padding: ${(prop) => prop.padding};
  border-radius: 0px 2px 2px 0px;
  line-height: 20px;
  text-decoration: none;
  color: #586069;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(prop) => prop.backgroundColor};
`;
