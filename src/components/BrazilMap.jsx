import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/brazil-states.geojson";

const BrazilMap = ({ onStateClick }) => {
  return (
    <div className="flex justify-center items-center w-full h-[600px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 600, center: [-55, -15] }}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onStateClick(geo.properties.name)}
                style={{
                  default: { fill: "rgba(61, 174, 43, 0.4)", outline: "0.5px solid #fff", cursor: "pointer"},
                  hover: { fill: "rgba(47, 140, 36, 0.7)", outline: "none", cursor: "pointer" },
                  pressed: { fill: "rgba(37, 102, 27, 0.7)", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default BrazilMap;
