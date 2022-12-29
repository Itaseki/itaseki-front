import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { StyledDivColumn } from "../../Style/StyledDiv";
import StyledBtn from "../../Style/StyledBtn";

const Guide = (props) => {
  const [gudiePop, setGuidePop] = useState({});

  return (
    <Modal>
      <StyledBtn
        style={{
          alignSelf: "flex-end",
          marginRight: 30,
        }}
        onClick={() => props.setGuidePop(false)}
      >
        <FontAwesomeIcon
          icon={faClose}
          style={{
            fontSize: "150%",
          }}
        />
      </StyledBtn>
      <StyledDivColumn style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Bold>달리기 가이드</Bold>
        <P>
          ‘달리기'는 누군가와 함께 실시간으로 예능 영상을 시청하며 채팅을 나눌
          수 있는 공간입니다. 달리기를 원하는 영상을 예약하고, 기준에 따라 영상
          예약이 확정되면 예약한 시간에 예능 영상을 실시간으로 시청 및 채팅을
          나눌 수 있습니다. 아래 유의사항을 확인한 후, 달리기 예약을 통해
          러너로서 즐거운 시간을 보내보세요 :)
        </P>
        <Bold>달리기 진행 가이드</Bold>
        <P>
          1. 달리기 대기 페이지에서 예약 대기 목록과 예약 확정 목록을
          확인합니다.
        </P>
        <P>
          a. 예약이 확정된 영상이 있는 경우, 해당 영상의 달리기가 진행되는
          시간에는 예약이 불가능합니다. b. 예약 대기 목록을 통해 달리기를 원하는
          예능 영상에 ‘나도 예약하기'를 눌러 해당 영상이 달릴 수 있도록
          해보세요! - 예약 대기 목록에서 보고 싶은 시간대를 다중 선택하여 대기
          상태인 예약 목록을 확인할 수 있습니다. - 예약 이름을 선택하면 영상에
          대한 정보가 표시되며, ‘나도 예약하기’ 버튼을 눌러 예약 인원을 추가할
          수 있습니다. (추가 시 달리기 영상으로 확정될 확률이 높아집니다.){" "}
        </P>
        <P>
          2. 새로운 영상 예약을 원할 시, ‘달리기 예약하기' 버튼을 눌러 예약을
          진행합니다.
        </P>
        <P>
          3. ‘영상 등록하기'를 통해 텔레이나 영상 게시판에 게재된 영상글을 통해
          달리기를 예약합니다.
        </P>
        <P>
          a. 영상 게시판에 게재가 완료된 예능 영상만 예약이 가능합니다. b.
          새로운 영상을 등록하여 달리기 예약을 원할 경우, ‘영상 가져오기' 버튼을
          눌러 영상 게시판에 게시글을 입력해보세요. c. 영상 예약 이후 수정 및
          삭제는 불가합니다.
        </P>
        <P style={{ paddingLeft: 30 }}>
          1. 영상 제목을 검색하여 달리고자 하는 영상을 찾습니다. 2. 영상 URL이
          일치하는지 확인합니다. 3. 영상 예약 날짜를 선택합니다. 4. 영상 예약
          시작 및 종료 시간을 입력합니다. 5. 10자 이내의 영상 소개를 통해 예약
          대기 화면에서 표시될 예약 이름을 입력합니다. 6. 영상 등록을
          완료합니다.
        </P>
        <P>
          4. 예약 대기 목록에서 예약 정보를 확인할 수 있으며, 예약 확정 기준이
          충족되면 영상 달리기가 진행됩니다.{" "}
        </P>
        <P>
          {" "}
          5. 달리기 대기 페이지의 ‘ENTER’ 버튼으로 영상 달리기를 즐깁니다.{" "}
        </P>
        <P>
          6. 달리기 페이지는 Light/Dark 모드 변경이 가능하며, 예약 시간이 되면
          영상이 자동 플레이됩니다.{" "}
        </P>
        <P> - 채팅창 공지를 확인하여 건전한 채팅 진행을 부탁드립니다.</P>
        <Bold>추가 안내 사항</Bold>
        <P>
          - 영상 예약은 수정 및 삭제가 불가합니다. - 영상 예약은 10분 단위로
          가능합니다. (예: 3분 영상 → 10분 예약, 13분 영상 → 20분 예약) - 특정
          시간대에 달리기 확정된 영상이 있다면 해당 시간에 예약된 내역은 자동
          삭제됩니다. (예: 12:10~12:30 시간대의 영상 달리기 확정 시, 11:50~12:20
          AND 12:10~12:20 AND 12:20~12:40 시간대 예약은 모두 삭제됩니다.) -
          하루(00시~11시 59분)동안 등록 가능한 예약 횟수는 총 5회이며, 3일(오늘,
          내일, 모레) 기준 총 15회입니다. (예: 예약을 진행하는 시간대는 상관
          없이 예컨대 1월 1일 영상 예약을 5회 진행할 시 추가로 예약을 진행할 수
          없으며, 1월 2일과 1월 3일 영상 예약을 각각 최대 5회(총 10회) 진행할 수
          있습니다.)
        </P>
      </StyledDivColumn>
    </Modal>
  );
};

export default Guide;

const Modal = styled.div`
  position: fixed;
  width: 1000px;
  height: 660px;
  left: 215px;
  top: 110px;
  z-index: 2;
  display: flex;
  padding-top: 1%;
  flex-direction: column;
  align-items: center;
  background: #f4f3ee;
  border: 6px dashed #000000;
  border-radius: 30px;
`;

const Bold = styled.p`
  font-weight: bold;
`;

const P = styled.p`
  margin: 0;
`;
