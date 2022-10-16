import React from "react";
import OtherDetail from "../../common-components/OtherDetail";
import IssueOpenedSVG from "../../common-components/svg/IssueOpenedSVG";
import {
  IssuesTableHeaderContainer,
  OpenClosedIssueAnchor,
  OpenClosedIssueDetails,
  OtherDetails,
} from "./IssuesTableHeader.Styled";

const IssuesTableHeader = () => {
  const otherValues = [
    "Auther",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ];
  return (
    <IssuesTableHeaderContainer>
      <OpenClosedIssueDetails>
        <OpenClosedIssueAnchor
          selected
          // href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
        >
          <IssueOpenedSVG />
          253 Open
        </OpenClosedIssueAnchor>
        <OpenClosedIssueAnchor
          style={{ marginLeft: "10px" }}
          // href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
        >
          {/* <CompletedSVG color="#586069" hoverColor="#24292e" /> */}
          6378 closed
        </OpenClosedIssueAnchor>
      </OpenClosedIssueDetails>
      <OtherDetails>
        {otherValues.map((value) => (
          <OtherDetail key={value} value={value} />
        ))}
      </OtherDetails>
    </IssuesTableHeaderContainer>
  );
};

export default IssuesTableHeader;
