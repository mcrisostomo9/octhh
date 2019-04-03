import React from "react";
import styled from "styled-components";
import fluidTypography from "../../utils/fluidTypography";

const BaseButton = props => {
  const { onClick, text, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

const Button = styled(BaseButton)`
  cursor: pointer;
  border: none;
  padding: 10px 12px;
  width: 100%;
  max-width: 150px;
  ${fluidTypography(320, 1980, 12, 14)};
  text-transform: uppercase;
  font-weight: bold;

  :hover {
    filter: brightness(65%);
  }
`;

export default Button;
