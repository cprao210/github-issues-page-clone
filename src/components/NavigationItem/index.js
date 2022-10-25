import React from "react";
import CodeSVG from "../../common-components/svg/CodeSVG";
import InsightsSVG from "../../common-components/svg/InsightsSVG";
import IssueOpenedSVG from "../../common-components/svg/IssueOpenedSVG";
import ProjectSVG from "../../common-components/svg/ProjectSVG";
import PrSVG from "../../common-components/svg/PrSVG";
import {
  NavigationItemAnchor,
  NavigationItemValue,
  NavigationItemWrapper,
} from "./NavigationItem.Styled";

const NavigationItem = ({ items }) => {
  console.log(items);
  return (
    <NavigationItemWrapper selected={items.selected}>
      {items.name === "Code" && <CodeSVG />}
      {items.name === "Issues" && <IssueOpenedSVG selected />}
      {items.name === "Pull Requests" && <PrSVG />}
      {items.name === "Projects" && <ProjectSVG />}
      {items.name === "Insights" && <InsightsSVG />}
      <NavigationItemAnchor href={items.url}>{items.name}</NavigationItemAnchor>
      {items.value ? (
        <NavigationItemValue>{items.value}</NavigationItemValue>
      ) : null}
    </NavigationItemWrapper>
  );
};

export default NavigationItem;
