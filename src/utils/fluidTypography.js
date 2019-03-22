// function for calculation of fluid typography
const fluidTypography = (minScreen, maxScreen, minFont, maxFont) => {
  return `font-size: calc(${minFont}px + (${maxFont} - ${minFont}) *  (100vw - ${minScreen}px)/(${maxScreen -
    minScreen}))`;
};

export default fluidTypography;
