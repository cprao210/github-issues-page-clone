/* eslint-disable camelcase */
import React from "react";
import styled from "styled-components";
import Labels from "../Labels";
import IssueOpenedSVG from "../svg/IssueOpenedSVG";
// import { Link } from "react-router-dom";

const IssueOpenedIconWrapper = styled.div`
  padding: 8px 0px 0px 16px;
  display: inline-block;
`;

export const UserAnchor = styled.a`
  text-decoration: none;
  color: #586069;

  &:hover {
    color: #0366d6;
  }
`;

const IssueAnchorWithLabel = styled.div`
  width: 75%;
`;

const IssueWrapper = styled.div`
  border: 1px solid #e1e4e8;
  background-color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #f6f8fa;
  }
`;

const IssueAnchorNTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-top: 2px;
`;

const IssueAnchor = styled.a`
  font-weight: 550;
  color: #24292e;
  display: inline-block;
  font-size: 16px;
  padding-left: 4px;
  word-break: break-word;
  text-decoration: none;

  &:hover {
    color: #0366d6;
    text-decoration: none;
  }
`;
const IssueOpenedBy = styled.div`
  font-size: 12px;
  color: #586069;
  line-height: 1.25;
  margin-top: 5px;
  margin-left: 42px;
  padding-bottom: 8px;
`;

const Issue = ({ issue }) => {
  console.log(issue);
  const getMsDifference = (date) => new Date() - new Date(date);

  const getHrDiff = (date) =>
    Math.floor(getMsDifference(date) / 1000 / 60 / 60);

  const getHoursDifference = (date) =>
    Math.floor(getMsDifference(date) / 1000 / 60 / 60) >= 2
      ? `${Math.floor(getMsDifference(date) / 1000 / 60 / 60)} hours`
      : "an hour";

  const getDaysDifference = (date) =>
    Math.floor(getHrDiff(date) / 24) >= 2
      ? `${Math.floor(getHrDiff(date) / 24)} days`
      : "a day";

  const getDifference = (date) =>
    getHrDiff(date) >= 24 ? getDaysDifference(date) : getHoursDifference(date);

  return (
    <IssueWrapper>
      <IssueAnchorNTitleWrapper>
        <IssueOpenedIconWrapper>
          <IssueOpenedSVG color="#28a745" />
        </IssueOpenedIconWrapper>
        <IssueAnchorWithLabel>
          <IssueAnchor
            //   to={`${number}`}
            color="#24292e"
            //   href={`${WEB_URL}/${OWNER}/${REPO}/issues/${number}`}
          >
            {" "}
            {issue.title}
          </IssueAnchor>
          <Labels labels={issue.labels} />
        </IssueAnchorWithLabel>
      </IssueAnchorNTitleWrapper>

      <IssueOpenedBy>
        <span>
          #{issue.number} opened {getDifference(issue.created_at)} ago by{" "}
          <UserAnchor>{issue.user.login}</UserAnchor>
        </span>
      </IssueOpenedBy>
    </IssueWrapper>
  );
};
export default Issue;
