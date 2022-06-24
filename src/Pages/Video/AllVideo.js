import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  VideoList,
  Line,
  OneVideoWrapper,
  VideoContainer,
  VideoInfo, VideoListWrapper,
  Wrapper, Pagination, Pages, PageNum, SortBox
} from "../../Style/AllVideo";
import Best_Video from '../../Assets/Best_Video.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../../Style/StyledBtn";
import preURL from "../../preURL/preURL";
import axios from "axios";

const AllVideo = () => {
  const [bestVideos, setBestVideos] = useState([
    {id: 1, title: "베스트 영상 1", writerNickname: "닉네임1", likeCount: 5},
    {id: 2, title: "베스트 영상 2", writerNickname: "닉네임2", likeCount: 5},
    {id: 3, title: "베스트 영상 3", writerNickname: "닉네임3", likeCount: 5},
    {id: 4, title: "베스트 영상 4", writerNickname: "닉네임4", likeCount: 5}
  ]);
  const [videos, setVideos] = useState([
    {id: 1, title: "영상 1", writerNickname: "닉네임1", likeCount: 5},
    {id: 2, title: "영상 2", writerNickname: "닉네임2", likeCount: 5},
    {id: 3, title: "영상 3", writerNickname: "닉네임3", likeCount: 5},
    {id: 4, title: "영상 4", writerNickname: "닉네임4", likeCount: 5}
  ]);
  const [totalPageCount, setTotalPageCount] = useState(0);  // 총 페이지 수
  const [pages, setPages] = useState([1,2,3,4,5]);
  const [page, setPage] = useState(0);  // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC
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
    axios
        .get(preURL.preURL +
            `/boards/video?page=${page}&sort=${sort}&sort=id,DESC
            &tag=${searchHashtag1},${searchHashtag2}&nickname=${searchNickname}&q=${searchKeyword}`)
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
          }
          setPages(list);
        })
        .catch((err) => {
          console.log("🧨전체 영상 조회 실패", err);
        })
  }, [sort]);

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

  const OneVideo = (video) => {
    return (
        <OneVideoWrapper>
          <VideoContainer />  {/*영상 썸네일*/}
          <VideoInfo> {/*비디오 디테일*/}
            {video.title}
            {video.writerNickname}
            {video.likeCount}
          </VideoInfo>
        </OneVideoWrapper>
    )
  };

  // 페이지 번호
  const showPages = pages.map((page) => {
    return (
        <PageNum style={{fontSize: "20px", padding: "10.5px"}}>
          {page}
        </PageNum>
    )
  });

  return (
      <div>
        <Header />
        <Wrapper>
          {(page===0) &&
              <VideoListWrapper>
                <img src={Best_Video} alt="Best Videos" />
                <VideoList>
                  {bestVideos.map((bestVideo) => {
                    return OneVideo(bestVideo)
                  })}
                </VideoList>
              </VideoListWrapper>
          }
          <Line />
          <VideoListWrapper>
            <VideoList>
              {videos.map((video) => {
                return OneVideo(video)
              })}
            </VideoList>
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
          <Pagination>
            <StyledBtn id="previous-page">
              <FontAwesomeIcon
                  icon={faCaretLeft}
                  style={{
                    fontSize: "20px",
                    color: "#9C9C9C",
                    marginLeft: "10.5px",
                  }}
              />
            </StyledBtn>
            <Pages>{showPages}</Pages>
            <StyledBtn id="next-page">
              <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{
                    fontSize: "20px",
                    color: "#9C9C9C",
                    marginLeft: "10.5px",
                  }}
              />
            </StyledBtn>
          </Pagination>
        </Wrapper>
      </div>
  )
}

export default AllVideo;