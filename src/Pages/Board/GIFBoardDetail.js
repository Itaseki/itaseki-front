import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";
import axios from "axios";
import preURL from "../../preURL/preURL";
import { light } from "../../Style/Color";
import { StyledDivRow } from "../../Style/StyledDiv";
import {
  DeleteBtn,
  Detail,
  Tag,
  TagWrapper,
  Wrapper,
  Info,
  InfoDetail,
  BottomWrapper,
  Btns,
} from "../../Style/GIFBoardDetail";
import { GifDetailTest } from "../../TestData/BoardTestData";

const GIFBoardDetail = ({ match }) => {
  const Id = useParams().id.substring(1);
  console.log("Id >>>", Id);

  const mainOrange = light.colors.mainColor;

  const [detailInfo, setDetailInfo] = useState(GifDetailTest);
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
            <div>
              <p>{detailInfo.imageBoardTitle}</p>
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
          <TagWrapper>
            <Tag>#{detailInfo.hashtags[0]}</Tag>
            {detailInfo.hashtags.length > 1 && (
              <Tag>#{detailInfo.hashtags[1]}</Tag>
            )}
            {detailInfo.hashtags.length > 2 && (
              <Tag>#{detailInfo.hashtags[2]}</Tag>
            )}
          </TagWrapper>
          <div>
            <Btns onClick={() => like()} bgColor="#ffffff">
              좋아요
            </Btns>
            <Btns onClick={() => report()} bgColor="#d9767c">
              신고
            </Btns>
          </div>
          {detailInfo.isThisUserWriter ? (
            <Link to="/boards">
              <DeleteBtn onClick={() => deleteImg()}>삭제</DeleteBtn>
            </Link>
          ) : (
            <DeleteBtn onClick={() => deleteImg()}>삭제</DeleteBtn>
          )}
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default GIFBoardDetail;
