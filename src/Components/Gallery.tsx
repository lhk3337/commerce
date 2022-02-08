import React from "react";
import * as S from "Style/Gallery";
const Gallery = () => {
  return (
    <S.Container>
      <S.GalleryItem>
        <S.GalleryTitle>Be Yourself!</S.GalleryTitle>
        <S.GalleryImg src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </S.GalleryItem>
      <S.GalleryItem>
        <S.GalleryImg src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <S.GalleryTitle>This is the First Day of Your New Life</S.GalleryTitle>
      </S.GalleryItem>
      <S.GalleryItem>
        <S.GalleryTitle>Just Do it!</S.GalleryTitle>
        <S.GalleryImg src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      </S.GalleryItem>
    </S.Container>
  );
};

export default Gallery;
