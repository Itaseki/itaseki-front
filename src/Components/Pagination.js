import React, {useState} from 'react';
import StyledBtn from "../Style/StyledBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {light} from "../Style/Color";

const Pagination = ({pages, setPages, page, setPage, totalPageCount}) => {

  const [showGoLeftPages, setShowGoLeftPages] = useState(false);
  const [showGoRightPages, setShowGoRightPages] = useState(true);

  // 페이지 클릭
  const onClickPage = (e) => {
    setPage(e.target.innerHTML-1);
    console.log("페이지 클릭", e.target.innerHTML);
  };

  // 페이지 넘기기
  const onClickNextPages = () => {
    console.log("페이지 넘기기");
    console.log("페이지:" + pages);
    if(pages.length < 5) return;
    let list = [];
    for(let i=0; i<5; i++){
      list[i] = pages[i]+5;
      if(list[i] >= totalPageCount) {
        setShowGoRightPages(false);
        break;
      }
    }
    setPages(list);
    setShowGoLeftPages(true);
  };

  //페이지 돌아가기
  const onClickPreviousPages = () => {
    console.log("페이지 돌아가기");
    console.log("페이지: " + pages);
    if(pages.length < 5){
      for(let i=0; i<5; i++) pages[i] = pages[0]+i;
    }
    let list = [];
    for(let i=4; i>=0; i--){
      list[i] = pages[i]-5;
      if(list[i] <= 1) {
        setShowGoLeftPages(false);
        break;
      }
    }
    setPages(list);
    setShowGoRightPages(true);
  };

  // 페이지 번호
  const showPages = pages.map((p) => {
    return (
        <>
          {page === p-1 ? (
              <PageNum onClick={onClickPage} style={{color: light.colors.mainColor}}>
                {p}
              </PageNum>
          ) : (
              <PageNum onClick={onClickPage}>
                {p}
              </PageNum>
          )}
        </>
    )
  });

  return (
      <PaginationWrapper>
        {showGoLeftPages &&
            <StyledBtn id="previous-page" onClick={onClickPreviousPages}>
              <FontAwesomeIcon
                  icon={faCaretLeft}
                  style={{
                    fontSize: "20px",
                    marginLeft: "10.5px",
                  }}
              />
            </StyledBtn>
        }
        <Pages>{showPages}</Pages>
        {showGoRightPages &&
            <StyledBtn id="next-page" onClick={onClickNextPages}>
              <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{
                    fontSize: "20px",
                    marginLeft: "10.5px",
                  }}
              />
            </StyledBtn>
        }
      </PaginationWrapper>
  )
}

export default Pagination;

/*페이지네이션*/
export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
`

export const PageNum = styled(StyledBtn)`
  font-size: 20px;
  padding: 10.5px;
`
