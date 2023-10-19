import React from "react";
import { designHighlights } from "../constants";
import DesignHighlight from "./DesignHighlight";

const Versatile = () => {
  return (
    <DesignHighlight
      heroImg={designHighlights[1].img}
      designHeading={designHighlights[1].heading}
      designDescrip={designHighlights[1].description}
    />
  );
};

export default Versatile;
