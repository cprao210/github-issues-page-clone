import React from "react";
import ForkSVG from "../svg/ForkSVG";
import StarSVG from "../svg/StarSVG";
import WatchSVG from "../svg/WatchSVG";
import {
  Caret,
  RepoDetailContainer,
  RepoDetailTagContainer,
  RepoDetailValueContainer,
} from "./RepoDetail.Styled";

const RepoDetail = ({ tag, value }) => {
  return (
    <RepoDetailContainer>
      <RepoDetailTagContainer>
        {tag === "Watch " && <WatchSVG />}
        {tag === "Star " && <StarSVG />}
        {tag === "Fork " && <ForkSVG />}

        {tag}
        <span className="nav-value"> {value}</span>
      </RepoDetailTagContainer>
      <RepoDetailValueContainer>
        <Caret />
      </RepoDetailValueContainer>
    </RepoDetailContainer>
  );
};

export default RepoDetail;
