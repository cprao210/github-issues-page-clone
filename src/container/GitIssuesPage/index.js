import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Issue from "../../common-components/Issue";
import Spinner from "../../common-components/Spinner";
import SubNav from "../../common-components/SubNav";
import IssuesTableHeader from "../../components/IssuesTableHeader";
import { getIssues } from "../../services/getissues";
import HeaderContainer from "../HeaderContainer";
import {
  Container,
  IssueListingContainer,
  IssuesContainerWrapper,
  IssuesTableWraper,
} from "./GitIssuesPage.Styled";

const GitIssuesPage = () => {
  const [page, setPage] = useState(1);
  const [issueArray, setIssueArray] = useState([]);
  const [moreData, setMoreData] = useState(true);

  useEffect(() => {
    getIssues(page).then((data) => {
      setIssueArray(data);
    });
  }, []);

  const fetchMoreData = () => {
    setMoreData(true);
    setPage((prevCount) => prevCount + 1);

    getIssues(page).then((data) => {
      if (data == null) {
        setMoreData(false);
      } else {
        setIssueArray([...issueArray, ...data]);
      }
    });
  };
  return (
    <Container>
      <HeaderContainer />
      <IssueListingContainer>
        <SubNav />

        <IssuesTableWraper>
          <IssuesTableHeader />
          <IssuesContainerWrapper>
            <div className="" id="scrollableDiv">
              <InfiniteScroll
                className="fetchData"
                dataLength={issueArray.length}
                next={fetchMoreData}
                hasMore={moreData}
                loader={<Spinner />}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {issueArray.map((issue, i) => (
                  <Issue key={i} issue={issue} />
                ))}
              </InfiniteScroll>
            </div>
          </IssuesContainerWrapper>
        </IssuesTableWraper>
      </IssueListingContainer>
    </Container>
  );
};

export default GitIssuesPage;
