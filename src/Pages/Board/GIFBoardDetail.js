import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";

// temp data
import Temp_gif from "../../Assets/Temp_gif.png";
import StyledBtn from "../../Style/StyledBtn";
import axios from "axios";
import preURL from "../../preURL/preURL";

const GIFBoardDetail = ({ match }) => {
  const { Id } = useParams();
  console.log("Id >>>", Id);

  const [detailInfo, setDetailInfo] = useState({
    id: 0,
    title: "제목",
    imageURL: Temp_gif,
    createdTime: 1,
    LocalDateTime: 1,
    viewCount: 0,
    likeCount: 0,
    wrtieNickname: "me",
    isThisUserWriter: false,
    isThisBoardLikedByUser: false,
    tags: ["1", "2", "3"],
  });

  useEffect(() => {
    console.log(
      "==========================[GIFBoardDetail]=========================="
    );
  }, []);

  // 등록된 건지 취소된건지 보이는 팝업이나 시각적 요소 필요
  const like = () => {
    axios
      .post(preURL.preURL + `/boards/image/${Id}`)
      .then((res) => {
        console.error("❕짤 좋아요 등록/취소❕ ", res.data);
      })
      .catch((err) => {
        console.error("⚠️ 짤 좋아요 등록/취소 ⚠️ ", err);
      });
  };

  const report = () => {
    axios
      .post(preURL.preURL + `/boards/image/${Id}/reports`)
      .then((res) => {
        console.log("❕짤 신고❕ ", res.data);
      })
      .catch((err) => {
        console.error("⚠️ 짤 신고 ⚠️ ", err);
      });
  };

  const deleteImg = () => {
    axios
      .delete(preURL.preURL + `/boards/image/${Id}`)
      .then((res) => {
        console.log("❕짤 삭제❕ ", res.data);
      })
      .catch((err) => {
        console.error("⚠️ 짤 삭제 ⚠️ ", err);
      });
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Info>
          <InfoDetail
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: 40,
                  fontWeight: "bold",
                  color: "white",
                  margin: 0,
                  marginRight: 15,
                }}
              >
                {detailInfo.title}
              </p>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "150%",
                  color: "#D9767C",
                  marginRight: "4.32px",
                }}
              />
              <p style={{ color: "#D9767C", fontSize: 36, margin: 0 }}>
                {detailInfo.likeCount}
              </p>
            </div>
            <StyledBtn
              style={{
                backgroundColor: "#505050",
                color: "white",
                fontSize: 16,
              }}
              onClick={() => deleteImg()}
            >
              삭제
            </StyledBtn>
          </InfoDetail>
          <InfoDetail>
            <Detail style={{ color: "#B1A5B9" }}>
              {detailInfo.wrtieNickname}
            </Detail>
            <Detail>|</Detail>
            <Detail>{detailInfo.createdTime}</Detail>
            <Detail>{detailInfo.LocalDateTime}</Detail>
            <Detail>|</Detail>
            <Detail>조회 {detailInfo.viewCount}</Detail>
          </InfoDetail>
        </Info>
        <BottomWrapper>
          <img
            src={detailInfo.imageURL}
            style={{ width: 292.3, height: 266.88, borderRadius: 14 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <Tag>#{detailInfo.tags[0]}</Tag>
            <Tag>#{detailInfo.tags[1]}</Tag>
            <Tag>#{detailInfo.tags[2]}</Tag>
          </div>
          <div>
            <StyledBtnWhite onClick={() => like()}>
              <BtnContentPurple>좋아요</BtnContentPurple>
            </StyledBtnWhite>
            <StyledBtnRed onClick={() => report()}>
              <BtnContentWhite>신고</BtnContentWhite>
            </StyledBtnRed>
          </div>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default GIFBoardDetail;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: #505050;
  padding: 3%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

const Detail = styled.p`
  color: white;
  font-size: 16;
  margin-right: 5px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tag = styled.p`
  color: white;
  font-size: 24;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
`;

const StyledBtnRed = styled(StyledBtn)`
  background-color: #d9767c;
  border-radius: 29px;
  margin: 10px;
  padding-left: 25px;
  padding-right: 25px;
`;

const StyledBtnWhite = styled(StyledBtn)`
  background-color: #ffffff;
  border-radius: 29px;
  margin: 10px;
  padding-left: 25px;
  padding-right: 25px;
`;

const BtnContentWhite = styled.p`
  color: white;
  font-size: 16;
  font-weight: bold;
`;

const BtnContentPurple = styled.p`
  color: #532a6b;
  font-size: 16;
  font-weight: bold;
`;
