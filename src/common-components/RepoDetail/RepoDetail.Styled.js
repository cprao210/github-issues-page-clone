import styled from "styled-components";

export const RepoDetailContainer = styled.div`
  display: inline-block;
  margin: 5px;
  font-size: 12px;
  border-collapse: collapse;
`;

export const RepoDetailTagContainer = styled.span`
  border: 1px solid #cdcfd1;
  border-width: 1px 0px 1px 1px;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 2px 0px 0px 2px;
  background-color: #f4f7f9;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e7eaed;
  }
`;

export const RepoDetailValueContainer = styled.span`
  border: 1px solid #cdcfd1;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 0px 2px 2px 0px;
  line-height: 20px;
  cursor: pointer;
  background-color: #ffffff;
`;

export const Caret = styled.span`
  padding: 0px 5px;

  &:after {
    border: 4px solid transparent;
    border-top-color: currentcolor;
    content: "";
    display: inline-block;
    height: 0;
    vertical-align: -2px;
    width: 0;
  }
`;
