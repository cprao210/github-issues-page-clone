import React from "react";
import { Label, LabelsWrapper } from "./Labels.Styled";

const Labels = ({ labels }) => (
  <LabelsWrapper>
    {labels.length > 0 &&
      labels.map(({ id, color, name }) => (
        <Label key={id} bgColor={color}>
          {name}
        </Label>
      ))}
  </LabelsWrapper>
);

export default Labels;
