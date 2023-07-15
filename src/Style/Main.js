import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

// Assets
import StyledBtn from "./StyledBtn";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
  min-width: 100%;
  min-height: 185rem;
  align-items: center;
  margin-top: 9%;
`;

export const First = styled(StyledDivColumn)`
  height: 100%;
  min-width: 100%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const RunningBtn = styled(StyledBtn)`
  width: 24.625rem;
  height: 4rem;
  background: #f7e9ee;
  border: 0.125rem solid #000000;
  box-shadow: 0.25rem -0.5rem 0px #000000;
  border-radius: 2rem;

  font-family: EF_Diary;
  font-size: 1.5rem;

  :hover {
    background-color: #8c5e61;
  }
`;

export const Second = styled(StyledDivRow)`
  height: 100%;
  min-width: 100%;
  padding: 15% 0% 15% 0%;
  justify-content: center;
`;

export const PopVidsContainer = styled.div`
  width: 40rem;
  height: 21rem;
  overflow: hidden;
  flex: none;
`;

export const PopVid = styled.img`
  width: 32rem;
  height: 18rem;
  object-fit: cover;
  border-radius: 3.75rem;
  margin-bottom: 1rem;
`;

export const ElevatorContainer = styled(StyledDivColumn)`
  display: flex;
  width: 5.125rem;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
`;

export const Num = styled(StyledDiv)`
  width: 4.5rem;
  height: 4.5rem;
  flex-shrink: 0;
  filter: drop-shadow(0.25rem -0.25rem 0px #000000);
  border-radius: 0.625rem;
  border: 0.375rem solid #000;
  background: #e3eded;
`;

export const Rank = styled.p`
  color: #000;
  text-align: center;
  font-family: EF_Diary;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const Btn = styled(StyledBtn)`
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2.125rem;
  filter: drop-shadow(0.25rem -0.5rem 0px #000000);
  background-color: #e3eded;
  border: 0.375rem solid #000000;
  border-radius: 0.625rem;
`;

export const Third = styled(StyledDivRow)`
  height: 100%;
  min-width: 100%;
  background-color: #d7e0e4;
  justify-content: center;
  align-items: center;
`;

export const PopPly = styled.img`
  width: 60%;
`;

export const PopThumbnail = styled.img`
  width: 24rem;
  height: 13.5rem;
  border-radius: 2.75rem;
`;

export const PopPlyTitle = styled(StyledDiv)`
  width: 27rem;
  height: 4rem;
  background: #000000;
  border: 0.25rem solid #000000;
  box-shadow: 0.6rem -0.6rem 0px #faede2, 0.6rem -0.6rem 0px 0.25rem #000000;
  border-radius: 0.3rem;
  transform: rotate(-2.75deg);

  font-family: EF_Diary;
  font-size: 1.75rem;
  color: white;
`;

export const PlyBox = styled.ul`
  width: 19rem;
  background: #faede2;
  border: 0.25rem solid #000000;
  filter: drop-shadow(0.6rem -0.6rem 0px #000000);
  padding: 4rem;
  margin-top: 2rem;
`;

export const PlyList = styled.li`
  list-style-type: circle;
  margin-bottom: 1.75rem;
  font-family: EF_Diary;
  font-size: 1rem;
`;

export const Fourth = styled(StyledDivRow)`
  height: 100%;
  width: 100%;
  background-color: #d7e0e4;
  justify-content: space-around;
  padding-top: 10rem;
`;

export const ImgBtnBox = styled(StyledDivRow)`
  width: 80%;
  justify-content: space-between;
`;

export const ImgBtn = styled.img`
  width: 17rem;
  flex-shrink: 0;
`;

export const TagBox = styled.div`
  width: 10rem;
  height: 1.95rem;
  background-color: #f3e1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4.5rem;
`;
