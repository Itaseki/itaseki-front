import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestGIFWrapper = styled.div`
  width: 846px;
  height: 114px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 27px;
  border-bottom: 3px dashed #000000;
`;

export const BestGIF = styled.img`
  width: 242.2px;
  height: 239.4px;
  position: relative;
  top: -27px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MapList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const GIFBox = styled.div`
  margin: 31px 40px 12px 40px;
`;

export const Line = styled.div`
  width: 843px;
  border-bottom: 3px dashed #000000;
`;

export const Sort2Box = styled.div`
  width: 843.5px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
