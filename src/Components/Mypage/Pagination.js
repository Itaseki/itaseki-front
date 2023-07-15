import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Style
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ page, setPage, totalPageCount }) => {
  const [showGoLeftPages, setShowGoLeftPages] = useState(false);
  const [showGoRightPages, setShowGoRightPages] = useState(true);

  useEffect(() => {
    setShowGoRightPages(totalPageCount > 1);
    // console.log(totalPageCount);
  }, [totalPageCount]);

  // 페이지 넘기기
  const onClickNextPages = (e) => {
    console.log("페이지 넘기기");
    const nxt = page + 1;
    setPage(nxt);
    if (nxt + 1 === totalPageCount) setShowGoRightPages(false);
    setShowGoLeftPages(true);
  };

  //페이지 돌아가기
  const onClickPreviousPages = () => {
    console.log("페이지 돌아가기");
    const prev = page - 1;
    setPage(prev);
    if (prev === 0) setShowGoLeftPages(false);
    setShowGoRightPages(true);
  };

  return (
    <PaginationWrapper>
      {showGoLeftPages && (
        <StyledBtn id="previous-page" onClick={onClickPreviousPages}>
          <FontAwesomeIcon
            icon={faCaretLeft}
            style={{
              fontSize: "20px",
              color: light.colors.mainColor,
              marginRight: "10.5px",
            }}
          />
        </StyledBtn>
      )}
      <span>{page + 1} page</span>
      {showGoRightPages && (
        <StyledBtn id="next-page" onClick={onClickNextPages}>
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{
              fontSize: "20px",
              color: light.colors.mainColor,
              marginLeft: "10.5px",
            }}
          />
        </StyledBtn>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;

/*페이지네이션*/
export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
