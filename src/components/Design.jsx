import React from "react";
import { designHighlights } from "../constants";
import DesignHighlight from "./DesignHighlight";

const Design = () => {
  return (
    <DesignHighlight
      heroImg={designHighlights[0].img}
      designHeading={designHighlights[0].heading}
      designDescrip={designHighlights[0].description}
    />
  );
};

export default Design;
