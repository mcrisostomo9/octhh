import React from "react";
import Img from "gatsby-image";

const PanelistSection = ({ data: { panelistItems } }) => {
  console.log(panelistItems);
  return (
    <div>
      <div>Panelists</div>
      {panelistItems.map(i => (
        <>
          <div>{i.name}</div>
          <div>{i.position}</div>
          <div>{i.biography}</div>
          <Img fluid={i.image.childImageSharp.fluid} />
        </>
      ))}
    </div>
  );
};

export default PanelistSection;
