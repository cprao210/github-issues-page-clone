import styled from "styled-components";

export const IssuesTableHeaderContainer = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: ponter;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const OpenClosedIssueDetails = styled.div`
  padding-left: 16px;
`;

export const OpenClosedIssueAnchor = styled.a`
  border: 1px solid transparent;
  border-radius: 3px 3px 0 0;
  border-top: 3px solid transparent;
  float: left;
  font-weight: ${(props) => (props.selected ? "bold" : "none")};
  padding: 13px 0px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.selected ? "#24292e" : "#586069")};
  &:hover {
    color: #24292e;
  }
`;

export const OtherDetails = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
