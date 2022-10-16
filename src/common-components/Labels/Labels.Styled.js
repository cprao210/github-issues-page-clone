import styled from "styled-components";

export const Label = styled.span`
  background-color: #${(props) => (props.bgColor ? props.bgColor : "#fff")};
  border-radius: 2em;
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  line-height: 15px;
  padding: 0 7px;
  margin-left: 4px;
`;

export const LabelsWrapper = styled.span`
  &:hover {
    color: #24292e;
  }
`;
