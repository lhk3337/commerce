import React from "react";

import * as S from "Style/Feature";
import { FeatureType, FeatureItem } from "types";
const Feature = ({ features }: FeatureType) => {
  return (
    <S.Container>
      {features.map((feature: FeatureItem) => {
        return (
          <S.FeatureItem key={feature.id}>
            <S.Img src={feature.img} />
            <S.Title>{feature.title}</S.Title>
            <S.Desc>{feature.desc}</S.Desc>
          </S.FeatureItem>
        );
      })}
    </S.Container>
  );
};

export default Feature;
