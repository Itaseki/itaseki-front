import React, {useEffect, useState} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
import OnePly from "../../Components/Playlist/Oneply";
import NewPlaylistModal from "../../Components/Playlist/NewPlaylistModal";
// Style
import {
  BestTitleLogo, HOT,
  Line,
  MainBox,
  MainLogo,
  NewPost,
  SortBox, TopWrapper,
  VideoList,
  VideoListWrapper,
  Wrapper
} from "../../Style/Video";
import {TopBtns, TopBtnsWrapper} from "../../Style/Playlist";
import StyledBtn from "../../Style/StyledBtn";
// Assets
import Ply_main from "../../Assets/Ply_main.png";


const AllPlaylist = () => {

  const [showAddNewPlyModal, setShowAddNewPlyModal] = useState(false);

  const [bestPlaylist, setBestPlaylist] = useState([
    // {id: 1, title: "베스트 플리1", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 7},
    // {id: 2, title: "베스트 플리2", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 25, saveCount: 3, videoCount: 7},
    // {id: 3, title: "베스트 플리3", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 22, saveCount: 3, videoCount: 7},
    // {id: 4, title: "베스트 플리4", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 19, saveCount: 3, videoCount: 7}
  ]);

  const [playlist, setPlaylist] = useState([
    // {id: 1, title: "베스트 플리1", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 7},
    // {id: 2, title: "베스트 플리2", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 25, saveCount: 3, videoCount: 7},
    // {id: 3, title: "베스트 플리3", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 22, saveCount: 3, videoCount: 7},
    // {id: 4, title: "베스트 플리4", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 19, saveCount: 3, videoCount: 7},
    // {id: 1, title: "베스트 플리1", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 30, saveCount: 3, videoCount: 7},
    // {id: 4, title: "베스트 플리4", titleImageUrl: "https://i.ytimg.com/vi/9y6pIpg3KyQ/mqdefault.jpg", writerNickname: "작성자", likeCount: 19, saveCount: 3, videoCount: 7}
  ]);
  const [totalPageCount, setTotalPageCount] = useState(0);  // 총 페이지 수
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC

  // 베스트 플리 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + '/boards/playlist/best')
        .then((res) => {
          console.log("👍베스트 플레이리스트 조회 성공", res.data);
          setBestPlaylist(res.data);
        })
        .catch((err) => {
          console.log("🧨베스트 플레이리스트 조회 실패", err);
        })
  },[]);

  // 전체 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist?page=${page}&sort=${sort}&sort=id,DESC`)
        .then((res) => {
          console.log("👍전체 플레이리스트 조회 성공", res.data);
          const totalPage = res.data['totalPageCount'];
          const allPly = res.data['playlistsResponses'];
          setTotalPageCount(totalPage);
          setPlaylist(allPly);
          let list = [];
          if(totalPage < 5) {
            for(let i=1; i<=totalPage; i++)
              list.push(i);
            setPages(list);
          }
        })
        .catch((err) => {
          console.log("🧨전체 플레이리스트 조회 실패", err);
        })
  },[page, sort]);

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



  return (
      <div>
        <Header />
        <Wrapper>
          <TopWrapper>
            <MainLogo src={Ply_main} alt="플레이리스트 게시판"/>
            <NewPost onClick={() => setShowAddNewPlyModal(prev => !prev)}>새 플레이리스트 만들기</NewPost>
            {showAddNewPlyModal &&
              <NewPlaylistModal show={showAddNewPlyModal} setShow={setShowAddNewPlyModal}/>
            }
          </TopWrapper>
          <MainBox>
            {(page===0) &&
                <>
                  <HOT>HOT</HOT>
                  <VideoList >
                    {bestPlaylist.map((bestPly, idx) => {
                      return <OnePly ply={bestPly} best={idx+1}/>;
                    })}
                  </VideoList>
                  <Line />
                </>
            }
            <VideoList>
              {playlist.map((ply) => {
                return <OnePly ply={ply} best={false}/>
              })}
            </VideoList>
            <SortBox>
              <StyledBtn
                  id="sort-btn"
                  onClick={onClickSortNewest}
              >
                최신순
              </StyledBtn>
              <p>|</p>
              <StyledBtn
                  id="sort-btn"
                  onClick={onClickSortLike}
              >
                좋아요순
              </StyledBtn>
            </SortBox>
            <Pagination pages={pages} setPages={setPages} page={page} setPage={setPage} totalPageCount={totalPageCount} />
          </MainBox>
        </Wrapper>
      </div>
  )
}

export default AllPlaylist;