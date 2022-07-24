import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
import OneVideo from "../../Components/Video/OneVideo";
// Style
import {
  Line,
  SortBox,
  VideoList,
  VideoListWrapper,
  Wrapper,
} from "../../Style/Video";
import StyledBtn from "../../Style/StyledBtn";
// Aseets
import TV from '../../Assets/Best_Video_TV.png';
import Add_New_Video from "../../Assets/Add_new_video.png";

const AllVideo = () => {
  const navigate = useNavigate();

  const [bestVideos, setBestVideos] = useState([
    {id: 1, title: "베스트 영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "베스트 영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "베스트 영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "베스트 영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  const [videos1, setVideos1] = useState([
    {id: 1, title: "영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  const [videos2, setVideos2] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);  // 총 페이지 수
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);  // 플레이리스트 모달창 보이기
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id
  // 검색
  const [searchHashtag1, setSearchHashtag1] = useState("");
  const [searchHashtag2, setSearchHashtag2] = useState("");
  const [searchNickname, setSearchNickname] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 베스트 영상 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + '/boards/video/best')
        .then((res) => {
          console.log("👍베스트 영상 조회 성공", res.data);
          setBestVideos(res.data);
        })
        .catch((err) => {
          console.log("🧨베스트 영상 조회 실패", err);
        })
  }, []);

  // 전체 영상 조회
  useEffect(() => {
    if(page === 0) setVideos2([]);
    axios
        .get(preURL.preURL +
            `/boards/video?page=${page}&sort=${sort}&sort=id,DESC`) /*검색 - &tag=${searchHashtag1}%2C${searchHashtag2}&nickname=${searchNickname}&q=${searchKeyword}*/
        .then((res) => {
          console.log("👍전체 영상 조회 성공", res.data);
          const data = res.data;
          const totalPage = data["totalPageCount"];
          const allVideo = data["videosResponses"];
          setTotalPageCount(totalPage);
          if(page !== 0) {
            setVideos1(allVideo.slice(0, 4));
            setVideos2(allVideo.slice(4, 8));
          }
          else setVideos1(allVideo);
          let list = [];
          if(totalPage < 5) {
            for(let i=1; i<=totalPage; i++)
              list.push(i);
            setPages(list);
          }
        })
        .catch((err) => {
          console.log("🧨전체 영상 조회 실패", err);
        })
  }, [sort, page]);



  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlayListToggleDisplay(prev => !prev);
  };

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
        <img
            src={Add_New_Video}
            alt="새 영상글 쓰기"
            style={{display: "block", marginLeft: "auto", marginRight: "200px", cursor: "pointer"}}
            onClick={() => navigate("/addvideo")}
        />
        <Wrapper>
          {(page===0) &&
              <VideoListWrapper>
                <img src={TV} alt="Best Videos" />
                <VideoList style={{marginTop: "5%"}}>
                  {bestVideos.map((bestVideo) => {
                    return <OneVideo video={bestVideo}/>
                  })}
                </VideoList>
                <Line />
              </VideoListWrapper>
          }
          <VideoListWrapper>
            <VideoList>
              {videos1.map((video) => {
                return <OneVideo video={video}/>
              })}
            </VideoList>
            {videos2 &&
                <VideoList>
                  {videos2.map((video) => {
                    return <OneVideo video={video}/>
                  })}
                </VideoList>
            }
          </VideoListWrapper>
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
          {/*페이지네이션*/}
          <Pagination pages={pages} setPages={setPages} setPage={setPage} totalPageCount={totalPageCount} />
        </Wrapper>
      </div>
  )
}

export default AllVideo;