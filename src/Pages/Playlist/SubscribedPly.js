import React, {useState} from "react";
// Components
import Header from "../../Components/Header";
//Style
import {Line, SortBox, Wrapper} from "../../Style/Video";
import {
  AccountName, FourList, FourListWrapper, FourPlysWrapper,
  ListWrapper,
  MainLogo,
  OneAccountPlysWrapper, OneAccountWrapper,
  OnePlyWrapper,
  PlyContainer,
  PlyInfo
} from "../../Style/Playlist";
import StyledBtn from "../../Style/StyledBtn";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {light} from "../../Style/Color";
// Assets
import Subscribed_ply from "../../Assets/Subscribed_ply.png";
import Ply_preview from "../../Assets/Ply_preview.png";
import Ply_Count_Icon from "../../Assets/Ply_Count_Icon.png";
import Line_info from "../../Assets/Line_info.png";
import OnePly from "../../Components/Main/Oneply";
import Pagination from "../../Components/Pagination";


const colors = light.colors;

const SubscribedPly = () => {

  const [totalPageCount, setTotalPageCount] = useState(1);
  const [allPlyResponse, setAllPlyResponse] = useState([
    {userNickname: "IU", OneUserPly: [
        {id: 1, title: "IU 플리1", titleImageUrl: "https://i.ytimg.com/vi/-mM-OTwhw7A/maxresdefault.jpg", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "IU 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
    {userNickname: "suzy", OneUserPly: [
        {id: 1, title: "suzy 플리1", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리3", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리4", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리5", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리6", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리7", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리8", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "suzy 플리9", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        // {id: 1, title: "suzy 플리10", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
    {userNickname: "user1", OneUserPly: [
        {id: 1, title: "user1 플리1", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "user1 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
    {userNickname: "user2", OneUserPly: [
        {id: 1, title: "user2 플리1", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "user2 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
  ]);
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC


  // 최신순 정렬
  const onClickSortNewest = () => {
    console.log("최신순 정렬");
    setSort("");
  };

  // 좋아요순 정렬
  const onClickSortLike = () => {
    console.log("좋아요순 정렬");
    setSort("likeCount,DESC");
  };


  // 하나의 계정의 플리들
  const OneAccountPly = (plys) => {
    let fourPly = [];
    let result = [];  // 4개씩 담은 이중배열
    for(let i=0; i<plys.length; i++){
      fourPly = [...fourPly, plys[i]];
      if(fourPly.length === 4) {
        result.push(fourPly);
        fourPly = [];
      }
    }
    result.push(fourPly);

    return (
        result.map((fourPly) => {
          return (
              <FourPlysWrapper>
                {fourPly.map((ply) => {return OnePly(ply)})}
              </FourPlysWrapper>
          )
        })
    )
  }

  // 전체 결과
  const AllPlys = allPlyResponse.map((account) => {

    const name = account.userNickname;
    const plys = account.OneUserPly;

    let fourPly = [];
    return (
        <OneAccountWrapper>
          <AccountName>{name}</AccountName>
          <OneAccountPlysWrapper>
            {OneAccountPly(plys)}
          </OneAccountPlysWrapper>
          <Line />
        </OneAccountWrapper>
    )
  });


  return (
      <div>
        <Header />
        <Wrapper>
          <MainLogo
              src={Subscribed_ply}
              alt="구독한 플레이리스트 메인 로고"
              style={{top: "65px"}}/>
          <ListWrapper>
            {AllPlys}
          </ListWrapper>
          <SortBox>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "876px"}}
                onClick={onClickSortNewest}
            >
              최신순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4, left: "941px"}}
                onClick={onClickSortLike}
            >
              좋아요순
            </StyledBtn>
          </SortBox>
          <Pagination pages={pages} setPages={setPages} setPage={setPage} totalPageCount={totalPageCount} />
        </Wrapper>
      </div>
  )
}

export default SubscribedPly;