import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import { Caret } from "./RepoDetail/RepoDetail.Styled";
// import Detail from "../commons/Detail";
// import SearchSVG from "../commons/svg/SearchSVG";
// import Caret from "../commons/Caret";
// import Input from "./Input";
// import FiltersContainer from "./FiltersContainer";
// import CreateNewIssueButton from "./CreateNewIssueButton";
// import { OWNER, REPO, WEB_URL } from "../../api/constants";

const SubNavContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;

  .newIssue {
    background-color: #28a745;
    background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
    color: #fff;
    text-decoration: none;
    background-position: -1px -1px;
    background-repeat: repeat-x;
    background-size: 110% 110%;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    position: relative;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    &:hover {
      background-color: #269f42;
      background-image: linear-gradient(-180deg, #2fcb53, #269f42 90%);
      background-position: -0.5em;
      border-color: rgba(27, 31, 35, 0.5);
      background-repeat: repeat-x;
      text-decoration: none;
      outline-width: 0;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

const SearchContainer = styled.div`
  display: inline-block;
  position: relative;

  .input {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;
    background-position: right 8px center;
    background-repeat: no-repeat;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
    color: #24292e;
    line-height: 20px;
    min-height: 20px;
    outline: none;
    padding: 6px 8px;
    vertical-align: middle;
    font-size: 14px;
    background-color: #fafbfc;
    color: #586069;
    padding-left: 30px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    &:focus {
      background-color: #fff;
      border-color: #2188ff;
      box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
        0 0 0 0.2em rgba(3, 102, 214, 0.3);
      outline: none;
    }
  }

  @media (max-width: 820px) {
    margin-top: 10px;
  }
`;

const FilterNSearchContainer = styled.div`
  display: flex;
  align-items: baseline;

  .filter {
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    position: relative;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    color: #444d56;
  }

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
const SubNav = () => (
  <SubNavContainer>
    <FilterNSearchContainer>
      <div>
        <div className="filter">
          Filters
          <Caret />
        </div>
        <SearchContainer>
          <input
            className="input"
            type="text"
            defaultValue="is:issue is:open "
          />
          {/* <SearchSVG /> */}
        </SearchContainer>
      </div>

      <Detail
        tag="Labels"
        value="Milestones"
        tagBackgroundColor="#ffffff"
        valueBackgroundColor="#ffffff"
        tagPadding="9px 14px"
        valuePadding="9px 14px"
        // tagHref={`${WEB_URL}/${OWNER}/${REPO}/labels`}
        // valueHref={`${WEB_URL}/${OWNER}/${REPO}/milestones`}
      />
    </FilterNSearchContainer>

    <a className="newIssue" href={"#"}>
      New issue
    </a>
  </SubNavContainer>
);

export default SubNav;
