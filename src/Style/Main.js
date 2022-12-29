import styled from "styled-components";
import { StyledDivColumn } from "./StyledDiv";

// Assets
import Main_Article from "../Assets/Main_Article.png";
import Main_GIF from "../Assets/Main_GIF.png";
import StyledBtn from "./StyledBtn";

export const FirstBWrapper = styled(StyledDivColumn)`
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const TagBox = styled.div`
  width: 161px;
  height: 31px;
  background-color: #f3e1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 71px;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #532a6b;
`;

export const PWrapper = styled.div`
  margin: 0px 70px 0px 70px;
`;

export const Subheading = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 23px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArticleBtn = styled(StyledBtn)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 26px;
  width: 460px;
`;

export const PopArticleContainer = styled.div`
  background-image: url(${Main_Article});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 521px;
  height: 169px;
`;

export const PopGIFContainer = styled.div`
  background-image: url(${Main_GIF});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 521px;
  height: 170px;
`;
