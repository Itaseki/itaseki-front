import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";

// temp data
import Temp_gif from "../../Assets/Temp_gif.png";
import StyledBtn from "../../Style/StyledBtn";
import axios from "axios";
import preURL from "../../preURL/preURL";
import { light } from "../../Style/Color";
import { StyledDivRow } from "../../Style/StyledDiv";

const GIFBoardDetail = ({ match }) => {
  const Id = useParams().id.substring(1);
  console.log("Id >>>", Id);

  const mainOrange = light.colors.mainColor;

  const [detailInfo, setDetailInfo] = useState({
    id: 0,
    imageBoardTitle: "제목",
    imageUrl: Temp_gif,
    createdTime: 1,
    LocalDateTime: 1,
    viewCount: 0,
    likeCount: 0,
    writerId: 0,
    writerNickname: "me",
    isThisUserWriter: false,
    hashtags: ["1", "2", "3"],
  });
  let [likeCount, setLikeCount] = useState(detailInfo.likeCount);
  let [Ltime, setLtime] = useState(detailInfo.LocalDateTime);

  useEffect(() => {
    console.log(
      "==========================[GIFBoardDetail]=========================="
    );
    imgDetail();
  }, []);

  // 상세 짤 조회
  const imgDetail = () => {
    console.log(`/boards/image/${Id}`);
    axios
      .get(preURL.preURL + `/boards/image/${Id}`)
      .then((res) => {
        console.error("❕상세 짤 조회❕ ", res.data);
        setDetailInfo(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 상세 짤 조회 ⚠️ ", err);
      });
  };

  // 등록된 건지 취소된건지 보이는 팝업이나 시각적 요소 필요
  const like = () => {
    axios
      .post(preURL.preURL + `/boards/image/${Id}/likes`)
      .then((res) => {
        console.error("❕짤 좋아요 등록/취소❕ ", res.data);
        console.log(likeCount);
        setLikeCount((prev) => res.data);
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
        alert(
          "해당 짤이 신고되었습니다. 신고가 누적되면 해당 짤은 삭제됩니다."
        );
      })
      .catch((err) => {
        console.error("⚠️ 짤 신고 ⚠️ ", err);
      });
  };

  const deleteImg = () => {
    {
      detailInfo.isThisUserWriter
        ? axios
            .delete(preURL.preURL + `/boards/image/${Id}`)
            .then((res) => {
              console.log("❕짤 삭제❕ ", res);
              alert("짤이 삭제되었습니다.");
            })
            .catch((err) => {
              console.error("⚠️ 짤 삭제 ⚠️ ", err);
            })
        : alert("이 짤을 등록한 작성자가 아닙니다. 삭제할 수 없습니다.");
    }
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
                {detailInfo.imageBoardTitle}
              </p>
            </div>
          </InfoDetail>
          <InfoDetail>
            <Detail style={{ color: `${mainOrange}` }}>
              {detailInfo.writerNickname}
            </Detail>
            <Detail>|</Detail>
            <Detail>{detailInfo.createdTime}</Detail>
            <Detail>{Ltime}</Detail>
            <Detail>|</Detail>
            <Detail>조회 {detailInfo.viewCount}</Detail>
            <Detail>|</Detail>
            <StyledDivRow>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  color: `${mainOrange}`,
                  marginRight: "4.32px",
                }}
              />
              <p style={{ color: `${mainOrange}`, margin: 0 }}>
                {detailInfo.likeCount}
              </p>
            </StyledDivRow>
          </InfoDetail>
        </Info>
        <BottomWrapper>
          <img
            src={detailInfo.imageUrl}
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
            <Tag>#{detailInfo.hashtags[0]}</Tag>
            {detailInfo.hashtags.length > 1 ? (
              <Tag>#{detailInfo.hashtags[1]}</Tag>
            ) : (
              <></>
            )}
            {detailInfo.hashtags.length > 2 ? (
              <Tag>#{detailInfo.hashtags[2]}</Tag>
            ) : (
              <></>
            )}
          </div>
          <div>
            <StyledBtnWhite onClick={() => like()}>좋아요</StyledBtnWhite>
            <StyledBtnRed onClick={() => report()}>신고</StyledBtnRed>
          </div>
          {detailInfo.isThisUserWriter ? (
            <Link to="/boards">
              <StyledBtn
                style={{
                  backgroundColor: "none",
                  color: "white",
                  fontSize: 16,
                  position: "relative",
                  right: -320,
                }}
                onClick={() => deleteImg()}
              >
                삭제
              </StyledBtn>
            </Link>
          ) : (
            <StyledBtn
              style={{
                backgroundColor: "none",
                color: "white",
                fontSize: 16,
                position: "relative",
                right: -320,
              }}
              onClick={() => deleteImg()}
            >
              삭제
            </StyledBtn>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default GIFBoardDetail;

const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  padding: 3%;
  width: 55%;
  height: 80%;

  box-sizing: border-box;
  border: 6px dashed #ffffff;
  border-radius: 50px;
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
  color: #9c9c9c;
  font-size: 14;
  margin-right: 10px;
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

const StyledBtnWhite = styled(StyledBtn)`
  width: 146px;
  height: 58px;
  background-color: #ffffff;
  border-radius: 29px;
  margin: 10px;
  margin-right: 50px;
  padding-left: 25px;
  padding-right: 25px;
  background: #ffffff;
  border: 5px dashed #000000;
  border-radius: 29px;
`;

const StyledBtnRed = styled(StyledBtn)`
  width: 146px;
  height: 58px;
  background-color: #d9767c;
  border-radius: 29px;
  margin: 10px;
  margin-left: 50px;
  padding-left: 25px;
  padding-right: 25px;
  background: #ffffff;
  border: 3px dashed #000000;
  border-radius: 29px;
`;
