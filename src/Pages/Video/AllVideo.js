import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  VideoList,
  Line,
  OneVideoWrapper,
  VideoContainer,
  VideoInfo, VideoListWrapper,
  Wrapper, Pagination, Pages, PageNum, SortBox,
  AutoFrame
} from "../../Style/Video";
import Best_Video from '../../Assets/Best_Video.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../../Style/StyledBtn";
import preURL from "../../preURL/preURL";
import axios from "axios";
import PlayListIcon from "../../Assets/Playlist_mini.png";
import {useNavigate} from "react-router-dom";

const AllVideo = () => {
  const navigate = useNavigate();

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
  const [playlistToggleDisplay, setPlaylistToggleDisplay] = useState(false);  // 플레이리스트 모달창 보이기
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
    axios
        .get(preURL.preURL +
            `/boards/video?page=${page}&sort=${sort}&sort=id,DESC`) /*검색 - &tag=${searchHashtag1}%2C${searchHashtag2}&nickname=${searchNickname}&q=${searchKeyword}*/
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

  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlaylistToggleDisplay(prev => !prev);
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

  // 각 비디오
  const OneVideo = (video) => {
    const videoId = video.id;
    return (
        <OneVideoWrapper>
          <VideoContainer onClick={()=>navigate(`/videolist/${videoId}`)}/>  {/*영상 썸네일*/}
          <div>
            <VideoInfo>
              <span id="title" onClick={()=>navigate(`/videolist/${videoId}`)}>
                {video.title}
              </span>
              <div id="info-right">
                <StyledBtn>
                  <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                  />
                </StyledBtn>
                <span style={{color: "#D9767C"}}>{video.likeCount}</span>
                <img
                    src={PlayListIcon}
                    alt="플레이리스트에 추가"
                    id={video.id}
                    onClick={onClickAddToPlaylist}
                    style={{marginLeft: "4px", cursor: "pointer"}}/>
                {clickedPlyId === video.id &&   /*클릭한 아이콘과 id가 동일한 모달창에만 적용되도록*/
                    <AutoFrame display={playlistToggleDisplay} style={{marginTop: "200px"}}>
                      플레이리스트에 추가
                    </AutoFrame>
                }
              </div>
            </VideoInfo>
            <span style={{fontSize: "small", color: "var(--main-color)"}}>{video.writerNickname}</span>
          </div>
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