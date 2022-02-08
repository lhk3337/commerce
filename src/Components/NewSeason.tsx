import React from "react";
import * as S from "Style/NewSeason";
const NewSeason = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <S.Container>
      <S.NewSeasonItem>
        <S.NewSeasonImg src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </S.NewSeasonItem>
      <S.NewSeasonItem>
        <S.NewSeasonSmTitle>WINTER NEW ARRIVALS</S.NewSeasonSmTitle>
        <S.NewSeasonTitle>New Season</S.NewSeasonTitle>
        <S.NewSeasonTitle>New Collection</S.NewSeasonTitle>
        <S.NewSeasonBtn onClick={handleTop}>CHOOSE YOUR STYLE</S.NewSeasonBtn>
      </S.NewSeasonItem>
      <S.NewSeasonItem>
        <S.NewSeasonImg src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </S.NewSeasonItem>
    </S.Container>
  );
};

export default NewSeason;
