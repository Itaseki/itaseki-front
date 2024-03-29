import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Token from "../../Components/Token";
// Components
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
import OneVideo from "../../Components/Video/OneVideo";
// Style
import {
  MainLogo,
  Line,
  SortBox,
  VideoList,
  VideoListWrapper,
  Wrapper, TopWrapper, NewPost, MainBox, HOT,
} from "../../Style/Video";
import StyledBtn from "../../Style/StyledBtn";
// Aseets
import Video_main from "../../Assets/Video_main.png"

const AllVideo = () => {
  const token = Token();
  const navigate = useNavigate();

  const [bestVideos, setBestVideos] = useState([
    {id: 1, title: "베스트 영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "베스트 영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "베스트 영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "베스트 영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  const [videos, setVideos] = useState([
    {id: 1, title: "영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    {id: 2, title: "영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    {id: 3, title: "영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    {id: 4, title: "영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""},
    // {id: 1, title: "영상 1", writerNickname: "닉네임1", likeCount: 5, thumbnailUrl: ""},
    // {id: 2, title: "영상 2", writerNickname: "닉네임2", likeCount: 5, thumbnailUrl: ""},
    // {id: 3, title: "영상 3", writerNickname: "닉네임3", likeCount: 5, thumbnailUrl: ""},
    // {id: 4, title: "영상 4", writerNickname: "닉네임4", likeCount: 5, thumbnailUrl: ""}
  ]);
  // const [videos2, setVideos2] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0);  // 총 페이지 수
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC

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
    axios
        .get(preURL.preURL +
            `/boards/video?page=${page}&sort=${sort}&sort=id,DESC`)
        .then((res) => {
          console.log("👍전체 영상 조회 성공", res.data);
          const data = res.data;
          const totalPage = data["totalPageCount"];
          const allVideo = data["videosResponses"];
          setTotalPageCount(totalPage);
          setVideos(allVideo);
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

  // 새 영상 올리기 버튼 클릭
  const addNewPost = () => {
    if(!token) {
      alert('로그인 후 이용해주세요.');
      return;
    }
    navigate("/addvideo");
  };


  return (
      <div>
        <Header />
        <Wrapper>
          <TopWrapper>
            <MainLogo src={Video_main} alt="영상 게시판" />
            <NewPost onClick={addNewPost} board="video">
              새 영상 올리기
            </NewPost>
          </TopWrapper>
          <MainBox>
            {(page===0) &&
                <>
                  <HOT>HOT</HOT>
                  <VideoList>
                    {bestVideos.map((bestVideo, idx) => {
                      return <OneVideo video={bestVideo} best={idx+1}/>
                    })}
                  </VideoList>
                  <Line />
                </>
            }
            <VideoList>
              {videos.map((video) => {
                return <OneVideo video={video} best={false}/>
              })}
            </VideoList>
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
            {/*페이지네이션*/}
            <Pagination pages={pages} setPages={setPages} page={page} setPage={setPage} totalPageCount={totalPageCount} />
          </MainBox>
          </Wrapper>
      </div>
  )
}

export default AllVideo;