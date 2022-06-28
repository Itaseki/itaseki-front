import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../Components/Header";
import {
  AddToPlayList, AddVideoBtn,
  AddVideoForm,
  AutoFrame, HashTag,
  Introduce,
  NewUrlForm, OneSeries,
  PreInform,
  PreInformContent, Round,
  Series
} from "../../Style/Video";
import StyledBtn from "../../Style/StyledBtn";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
import useInput from "../../Hooks/useInput";

const AddNewVideo = () => {
  const navigate = useNavigate();

  const [newUrl, onChangeNewUrl, setNewUrl] = useInput("");
  const [verified, setVerified] = useState(false);
  const [introduction, onChangeIntroduction,setIntroduction] = useInput("");
  const [seriesList, setSeriesList] = useState([]);
  const [hashTagsList, setHashTagsList] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [searchSeries, onChangeSearchSeries, setSearchSeries] = useInput("");
  const [hashTag1, setHashTag1] = useState("");
  const [hashTag2, onChangeHashTag2, setHashTag2] = useInput("");
  const [selectedPlayList, setSelectedPlayList] = useState("");
  const [seriesToggleDisplay, setSeriesToggleDisplay] = useState(false);
  const [hashTagToggleDisplay, setHashTagToggleDisplay] = useState(false);
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);

  // 토글 정보 불러오기
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/video/info/${1}`) /*{userId}*/
        .then((res) => {
          console.log("👍시리즈, 해시태그, 플레이리스트 조회 성공", res.data);
          setSeriesList(res.data['series']);
          setHashTagsList(res.data['hashtags']);
          setPlayList(res.data['playlists']);
        })
        .catch((err) => {
          console.log("🧨시리즈, 해시태그, 플레이리스트 조회 실패", err);
        })
  }, []);

  // url 검증
  const onClickUrlCheck = useCallback((e) => {
    e.preventDefault();
    console.log("newUrl: " + newUrl);
    axios
        .get(preURL.preURL + `/boards/video/verify?url=${newUrl}`)
        .then((res) => {
          console.log("👍url 검증 성공: ", res.data);
          if(res.data === "등록 가능") {
            alert("등록 가능한 영상입니다.");
            setVerified(true);
          }
          else if(res.data === "등록 불가능") {
            alert("등록 불가능한 영상입니다.");
          }
        })
        .catch((err) => {
          console.log("🧨url 검증 실패", err);
        })
  }, [newUrl]);

  // 시리즈 검색
  useEffect(() => {
    if(searchSeries.length % 2 !== 0) return; // 2글자씩 검색 가능
    console.log("검색어: ", searchSeries);
    axios
        .get(preURL.preURL + `/boards/video/series/search?q=${searchSeries}`)
        .then((res) => {
          console.log("👍시리즈 검색 요청 성공", res);
          setSeriesList(res.data);
        })
        .catch((err) => {
          console.log("🧨시리즈 검색 요청 실패", err);
        })
  },[searchSeries]);

  // 시리즈 토글에서 선택
  const onClickOneSeries = (e) => {
    e.preventDefault();
    let selected = e.target.innerHTML;
    console.log(selected);
    setSearchSeries(selected);
  };

  // 해시태그1 토글에서 선택
  const selectHashTag1 = (prop) => {
    const selected = prop.target.value;
    const boolChecked = prop.target.checked;
    console.log(selected, boolChecked);

    let newHashTag1;
    if(boolChecked) {
      newHashTag1 = [...hashTag1, selected];
      setHashTag1(newHashTag1);
    }
    else {
      newHashTag1 = hashTag1.filter(hashTag1 => hashTag1 !== selected);
      setHashTag1(newHashTag1);
    }
  };

  // 플레이리스트에 추가
  const selectPlayList = () => {
    // 플레이리스트 값 넘어오면 수정
  }

  // 영상 등록
  const onSubmitNewVideo = () => {
    console.log("영상 등록하기");
    navigate('/videolist');
  };

  // 시리즈 토글 리스트
  const SeriesList = seriesList.map((oneSeries) => {
    return (
        <OneSeries onClick={onClickOneSeries}>
          {oneSeries.name}
        </OneSeries>
    )
  });

  // 해시태그1 토글 리스트
  const HashTagList = hashTagsList.map((oneHashTag) => {
    return (
        <div>
          <input
              type="checkbox"
              id={oneHashTag.id}
              value={oneHashTag.name}
              onChange={selectHashTag1}
          />
          <label for={oneHashTag.id} style={{color: "white"}}>
            {oneHashTag.name}
          </label>
        </div>
    )
  });

  // 플레이리스트 토글 리스트
  const PlayList = playList.map((onePlayList) => {
    // 지금은 null 값으로 넘어와서 아무것도 안 뜸 -> 플레이리스트 구현 후 수정
    return(
        <div>
          <input
              type="checkbox"
              id={onePlayList.id}
              value={onePlayList.name}
              onChange={selectPlayList}
          />
          <label htmlFor={onePlayList.id} style={{color: "white"}}>
            {onePlayList.name}
          </label>
        </div>
    )
  });

  return (
      <div>
        <Header />
        <PreInform>
          <b>영상 등록시 유의사항</b>
          <PreInformContent>
            <span id="content">
              <p>1. 공지사항입니다</p>
              <p>2. 공지사항입니다</p>
            </span>
            <span id="agree">
              <input type="checkbox" />
              <span>동의합니다</span>
            </span>
          </PreInformContent>
        </PreInform>
        <AddVideoForm onSubmit={onSubmitNewVideo}>
          <NewUrlForm>
            <p>URL 입력</p>
            <input type="text" value={newUrl} onChange={onChangeNewUrl}/>
            <StyledBtn id="verify-btn" onClick={onClickUrlCheck}>검증</StyledBtn>
          </NewUrlForm>
          <div style={{display: "flex"}}>
            <Series>
              <p>시리즈</p>
              <input
                  type="text"
                  value={searchSeries}
                  onChange={onChangeSearchSeries}
                  onFocus={()=>setSeriesToggleDisplay(true)}
                  onBlur={()=>setSeriesToggleDisplay(false)}
              />
              <AutoFrame display={seriesToggleDisplay}>
                {SeriesList}
              </AutoFrame>
            </Series>
            <Introduce>
              <p>영상을 간단하게 소개한다면? (20자 이내)</p>
              <input type="text" value={introduction} onChange={onChangeIntroduction} maxLength="20"/>
            </Introduce>
          </div>
          <div style={{display: "flex"}}>
            <Round>
              <p>회차</p>
              <input type="text" />
            </Round>
            <HashTag>
              <p>해시태그1 (장르, 상황)</p>
              <input
                  type="text"
                  value={hashTag1}
                  onFocus={()=>setHashTagToggleDisplay(true)}
                  onBlur={()=>setHashTagToggleDisplay(false)}
              />
              <AutoFrame display={hashTagToggleDisplay}>
                {HashTagList}
              </AutoFrame>
            </HashTag>
            <HashTag>
              <p>해시태그2 (키워드)</p>
              <input type="text" value={hashTag2} onChange={onChangeHashTag2}/>
            </HashTag>
          </div>
          <AddToPlayList>
            <p>내 플레이리스트에 추가</p>
            <input
                type="text"
                value={selectedPlayList}
                onFocus={()=>setPlayListToggleDisplay(true)}
                onBlur={()=>setPlayListToggleDisplay(false)}
            />
            <AutoFrame display={playListToggleDisplay}>
              {PlayList}
            </AutoFrame>
          </AddToPlayList>
          <AddVideoBtn type="submit">등록하기</AddVideoBtn>
        </AddVideoForm>
      </div>
  )
}

export default AddNewVideo;