import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const NewSeasonItem = styled.div`
  flex: 1;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const NewSeasonImg = styled.img`
  width: 100%;
  height: 500px;
`;
export const NewSeasonSmTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;
export const NewSeasonTitle = styled.h1`
  font-size: 45px;
  margin: 40px 0px;
  font-weight: bold;
`;

export const NewSeasonBtn = styled.button`
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
`;
