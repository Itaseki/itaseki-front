import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../_contextAPI/UserContext";
import {preURL} from "../../preURL/preURL";
// Component
import Token from "../../Components/Token";
import Header from "../../Components/Header";
import MyPly from "../../Components/Mypage/MyPly";
import Pagination from "../../Components/Mypage/Pagination";
// Style
import {BGdiv, GotoPlyDiv, Title, Wrapper} from "../../Style/MyPage";
import StyledBtn from "../../Style/StyledBtn";
import {VideoList} from "../../Style/Video";
// Assets
import GoSetting from "../../Assets/Mypage_GotoSetting.png";
import Eye from "../../Assets/Mypage_eye2.png";
import axios from "axios";


const MySavedPly = () => {
  const navigate = useNavigate();
  const token = Token();
  const [user, setUser] = useContext(UserContext);

  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const [playlist, setPlaylist] = useState([
    // {id: 1, title: "플리1", titleImageUrl: "https://i.ytimg.com/vi/xhyWDLWanHE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDNC541Gll7yxMs9Vcc8MWtC9gzLg", likeCount: 3, isPublic: null},
    // {id: 2, title: "플리2", titleImageUrl: "https://i.ytimg.com/vi/MRaAcIQOIIw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDMAXcYHT37gxseIf6CA94ICpnTuQ", likeCount: 25, isPublic: null},
    // {id: 3, title: "플리3", titleImageUrl: "https://i.ytimg.com/vi/1ktnYFMm4S0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBRJHJTM-_VzaapK9oCWlD8t-K8WQ", likeCount: 3, isPublic: null},
    // {id: 4, title: "플리4", titleImageUrl: "https://i.ytimg.com/vi/Q2ehBSEkAzw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDgtPhu8WY4xOABtcCjVo5x-hgswA", likeCount: 22, isPublic: null},
    // {id: 5, title: "플리5", titleImageUrl: "https://i.ytimg.com/vi/mKkYQ2OwYYg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB-2wmECn5003TmXqION-Nqcgahzw", likeCount: 30, isPublic: null},
    // {id: 6, title: "플리6", titleImageUrl: "https://i.ytimg.com/vi/iiIcTPoIoZk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAjn_R-euhMSNKaCFjJzO89A93tAA", likeCount: 19, isPublic: null},
    // {id: 7, title: "플리7", titleImageUrl: "https://i.ytimg.com/vi/UfBxMDp7VTo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCJF-TybRxbbgYlWXiz2ARY6e-aHw", likeCount: 3, isPublic: null},
    // {id: 8, title: "플리8", titleImageUrl: "https://i.ytimg.com/vi/MzVRL5W4b1I/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDJ-2oHWJdsOn-YBOi9t52n0qepNw", likeCount: 3, isPublic: null}
  ]);


  // 저장한 플레이리스트 목록 받아오기
  useEffect(() => {
    axios
        .get(preURL + `/user/${user.id}/playlists/?page=${page}&type=saved&size=40`,{
          headers: {
            ITTASEKKI: token
          }
        })
        .then((res) => {
          console.log("👍저장한 플레이리스트 목록 불러오기 성공", res);
          setTotalPage(res.data['totalPageCount']);
          setPlaylist(res.data['data']);
        })
        .catch((err) => {
          console.log("🧨저장한 플레이리스트 목록 불러오기 실패", err);
          if(err.status === 403) {
            alert('로그인 후 이용해주세요.');
            window.location.replace("/");
          }
        })
  },[user, page]);


  return (
      <>
        <Header />
        <Wrapper>
          <GotoPlyDiv>
            <StyledBtn onClick={() => navigate('/mypage')}>내 활동 및 설정</StyledBtn>
            <img src={GoSetting} alt="내 설정 아이콘" onClick={() => navigate('/mypage')}/>
          </GotoPlyDiv>
          <BGdiv>
            <img src={Eye} alt="눈 이미지2" />
            <div>
              <Title>저장한 플레이리스트</Title>
              <VideoList>
                {playlist.map((ply) => {
                  return <MyPly ply={ply} />
                })}
              </VideoList>
            </div>
            <Pagination page={page} setPage={setPage} totalPageCount={totalPage} />
          </BGdiv>
        </Wrapper>
      </>
  )
}

export default MySavedPly;