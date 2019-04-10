import * as React from "react";

import styled from "styled-components";
import fluidTypography from "../../utils/fluidTypography";

const Text = styled.p`
  ${fluidTypography(320, 1980, 15, 20)};
  line-height: 1.5;
`;

const Description = ({ text, className }) => {
  return <Text className={className}>{text}</Text>;
};

export default Description;
