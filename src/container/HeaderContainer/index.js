import React from "react";
import RepoDetail from "../../common-components/RepoDetail";
import RepoLogoSVG from "../../common-components/svg/RepoLogoSVG";
import NavigationItem from "../../components/NavigationItem";
import {
  Nav,
  Navmenus,
  PathDivider,
  RepoTitleInfo,
  RightNav,
} from "./HeaderContainer.Styled";

const HeaderContainer = () => {
  const navigationValues = [
    {
      name: "Code",
      selected: false,
      url: `https://github.com/facebook/react`,
    },
    {
      name: "Issues",
      value: 253,
      selected: true,
      url: `${window.location.origin}`,
    },
    {
      name: "Pull Requests",
      value: 72,
      selected: false,
      url: `https://github.com/facebook/react/pulls`,
    },
    {
      name: "Projects",
      value: 2,
      selected: false,
      url: `https://github.com/facebook/react/projects`,
    },
    {
      name: "Insights",
      selected: false,
      url: `https://github.com/facebook/react/insights`,
    },
  ];
  return (
    <Nav>
      <Navmenus row="first">
        <RepoTitleInfo>
          <RepoLogoSVG />
          <span className="heading" color="#0366d6">
            facebook
          </span>
          <PathDivider>/</PathDivider>
          <span className="heading" style={{ fontWeight: "bold" }}>
            react
          </span>
        </RepoTitleInfo>
        <RightNav>
          <RepoDetail tag="Watch " value={"6.7k"} />
          <RepoDetail tag="Star " value={8743} />
          <RepoDetail tag="Fork " value={45734} />
        </RightNav>
      </Navmenus>

      <Navmenus row="second">
        {navigationValues.map((item) => (
          <NavigationItem key={item.name} items={item} />
        ))}
      </Navmenus>
    </Nav>
  );
};

export default HeaderContainer;
