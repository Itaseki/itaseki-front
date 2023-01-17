import React, {useEffect, useState} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import OnePly from "../../Components/Playlist/Oneply";
import Pagination from "../../Components/Pagination";
import Token from "../../Components/Token";
import {PlaylistHeader} from "./AllPlaylist";
// Style
import {BestTitleLogo, Line, SortBox, VideoList, VideoListWrapper, Wrapper} from "../../Style/Video";
import {
  AccountName,
  ListWrapper, OneAccountWrapper,
} from "../../Style/Playlist";
import StyledBtn from "../../Style/StyledBtn";
// Assets
import Subscribed_ply from "../../Assets/Subscribed_ply.png";

const SubscribedPly = () => {
  const token = Token();

  const [totalPageCount, setTotalPageCount] = useState(1);
  const [allPlyResponse, setAllPlyResponse] = useState([
    {userNickname: "IU", playlistsResponses: [
        {id: 1, title: "IU 플리1", titleImageUrl: "https://i.ytimg.com/vi/-mM-OTwhw7A/maxresdefault.jpg", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "IU 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
    {userNickname: "suzy", playlistsResponses: [
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
    {userNickname: "user1", playlistsResponses: [
        {id: 1, title: "user1 플리1", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "user1 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
    {userNickname: "user2", playlistsResponses: [
        {id: 1, title: "user2 플리1", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3},
        {id: 1, title: "user2 플리2", titleImageUrl: "url", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 3}
      ]},
  ]);
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState("id,DESC"); // 좋아요 순이면 -> likeCount,DESC


  // 구독 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/subscribe?page=${page}&sort=${sort}`, {
          headers: {
            'ITTASEKKI' : token
          }
        })
        .then((res) => {
          console.log("👍구독 플레이리스트 조회 성공", res.data);
          const data = res.data;
          const totalPage = data['totalPageCount'];
          setTotalPageCount(totalPage);
          setAllPlyResponse(data['playlistsResponses']);
          let list = [];
          if(totalPage < 5) {
            for(let i=1; i<=totalPage; i++)
              list.push(i);
            setPages(list);
          }
        })
        .catch((err) => {
          console.log("🧨구독 플레이리스트 조회 실패", err);
        })
  }, [page, sort]);


  // 최신순 정렬
  const onClickSortNewest = () => {
    console.log("최신순 정렬");
    setSort("id,DESC");
  };

  // 좋아요순 정렬
  const onClickSortLike = () => {
    console.log("좋아요순 정렬");
    setSort("likeCount,DESC");
  };


  // 전체 결과
  const AllPlys = allPlyResponse.map((account) => {

    const name = account.userNickname;
    const plys = account.playlistsResponses;

    return (
        <OneAccountWrapper>
          <AccountName>{name}</AccountName>
          <VideoListWrapper>
            <VideoList>
              {plys.map((ply) => {
                return <OnePly ply={ply} />
              })}
            </VideoList>
          </VideoListWrapper>
          <Line />
        </OneAccountWrapper>
    )
  });


  return (
      <div>
        <Header />
          <PlaylistHeader />
        <Wrapper>
          <BestTitleLogo
              src={Subscribed_ply}
              alt="구독한 플레이리스트 메인 로고"
              style={{top: "65px"}}/>
          <ListWrapper>
            {AllPlys}
          </ListWrapper>
          <SortBox>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", marginRight: 4, left: "876px"}}
                onClick={onClickSortNewest}
            >
              최신순
            </StyledBtn>
            <p>|</p>
            <StyledBtn
                id="sort-btn"
                style={{ fontSize: "10px", marginRight: 4, left: "941px"}}
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