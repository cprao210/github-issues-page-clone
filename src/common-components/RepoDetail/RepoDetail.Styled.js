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
  border-radius: 6px 0px 0px 6px;
  background-color: #f4f7f9;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e7eaed;
  }
  .nav-value {
    display: inline-block;
    min-width: 20px;
    margin-left: 2px;
    padding: 0 6px;

    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    background-color: rgb(176 184 193 / 20%);
    border: 1px solid rgb(3 3 3 / 0%);
    border-radius: 2em;
  }
`;

export const RepoDetailValueContainer = styled.span`
  border: 1px solid #cdcfd1;
  padding: 5px;
  border-radius: 0px 6px 6px 0px;
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
