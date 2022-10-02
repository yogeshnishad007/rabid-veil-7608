import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  height: 110%;
  padding: 40px;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex: ${(props) => (props.big ? 4 : 1)};
  flex-direction: column;
  max-height: 60vh;
  overflow: scroll;
  @media (max-width: 1030px) {
    flex: ${(props) => (props.big ? 1 : 1)};
  }
`;

export const CityBox = styled.div`
  &:hover {
    background: #b71761;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ededed;
  color: #666666;
  &:hover {
    color: #fff;
  }
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ededed;
  padding: 15px;
`;

export const P = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: #b71761;
  margin: 5px;
  cursor: pointer;
`;

export const Small = styled.p`
  color: #666666;
  font-size: 12px;
  margin: 5px;
`;
