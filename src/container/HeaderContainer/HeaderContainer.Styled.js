import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fafbfc;
  border-bottom: 2px solid #e1e4e8;
  width: 100%;
  transition: height 0.2s ease-in-out;
  height: 89px;
  margin-bottom: 20px;
  @media (max-width: 820px) {
    height: 77px;
  }

  @media (max-width: 600px) {
    height: 240px;
  }
`;
export const Navmenus = styled.div`
  display: flex;
  flex-direction: row;
  width: 88%;
  margin: 0 auto;
  padding-top: 10px;
  justify-content: ${(props) => props.row === "first" && "space-between"};

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0px;
  }
  .heading {
    color: rgb(3, 102, 214);
    font-size: 18px;
  }
`;
export const RepoTitleInfo = styled.div`
  @media (max-width: 600px) {
    padding-top: 15px;
  }
`;
export const PathDivider = styled.span`
  margin: 0 0.25em;
`;
export const RightNav = styled.div`
  @media (max-width: 820px) {
    display: none;
  }
`;
