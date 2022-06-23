import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  VideoList,
  Line,
  OneVideoWrapper,
  VideoContainer,
  VideoInfo, VideoListWrapper,
  Wrapper, Pagination, Pages, PageNum
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
      "영상 1", "영상 2", "영상 3", "영상 4"
  ]);
  const [pages, setPages] = useState([1,2,3,4,5]);

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
          <VideoListWrapper>
            <img src={Best_Video} alt="Best Videos" />
            <VideoList>
              {bestVideos.map((bestVideo) => {
                return OneVideo(bestVideo)
              })}
            </VideoList>
          </VideoListWrapper>
          <Line />
          <VideoListWrapper>
            <VideoList>
              {videos.map((video) => {
                return OneVideo(video)
              })}
            </VideoList>
          </VideoListWrapper>
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