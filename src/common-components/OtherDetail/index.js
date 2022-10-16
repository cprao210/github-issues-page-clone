import React from "react";
import styled from "styled-components";
import { Caret } from "../RepoDetail/RepoDetail.Styled";

const DetailSpan = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #586069;
  &:hover {
    color: #24292e;
  }
`;

const OtherDetail = ({ value }) => {
  return (
    <DetailSpan>
      {value}
      <Caret />{" "}
    </DetailSpan>
  );
};

export default OtherDetail;
