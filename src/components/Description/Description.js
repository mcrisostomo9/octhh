import * as React from "react";

import styled from "styled-components";

const Text = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

const Description = ({ text, className }) => {
  return <Text className={className}>{text}</Text>;
};

export default Description;
