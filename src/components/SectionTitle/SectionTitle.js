import * as React from "react";
import styled from "styled-components";
import fluidTypography from "../../utils/fluidTypography";

const Title = styled.h2`
  font-size: 20px;
  ${fluidTypography(320, 1980, 20, 35)};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 20px;
  color: ${props => (props.color ? props.color : `#0080bb`)};
`;

const SectionTitle = ({ title, className, color }) => {
  return (
    <Title className={className} color={color}>
      {title}
    </Title>
  );
};

export default SectionTitle;
