import React from "react";
import {
  DetailContainer,
  DetailTagContainer,
  DetailValueContainer,
} from "./Detail.Styled";

const Detail = ({
  tagBackgroundColor,
  tagPadding,
  tag,
  tagHref,
  valueBackgroundColor,
  valuePadding,
  value,
  valueHref,
}) => (
  <DetailContainer>
    <DetailTagContainer
      backgroundColor={tagBackgroundColor}
      padding={tagPadding}
      href={tagHref}
    >
      {tag}
    </DetailTagContainer>
    <DetailValueContainer
      backgroundColor={valueBackgroundColor}
      padding={valuePadding}
      href={valueHref}
    >
      {value}
    </DetailValueContainer>
  </DetailContainer>
);

export default Detail;
