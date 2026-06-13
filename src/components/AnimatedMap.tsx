import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Coordinates for markers [longitude, latitude]
const markers = [
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731] },
  { name: "Malaysia", coordinates: [101.9758, 4.2105] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Indonesia", coordinates: [113.9213, -0.7893] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] },
  { name: "China", coordinates: [104.1954, 35.8617] }
];

const highlightedCountries = markers.map(m => m.name);

export const AnimatedMap = memo(() => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 300,
        }}
        width={800}
        height={400}
        className="w-full h-full"
      >
        <ZoomableGroup center={[105, 15]} zoom={1.5} maxZoom={5}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = highlightedCountries.includes(geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "rgba(217, 164, 65, 0.4)" : "rgba(255, 255, 255, 0.05)"}
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none", transition: "all 250ms" },
                      hover: { outline: "none", fill: isHighlighted ? "rgba(217, 164, 65, 0.6)" : "rgba(255, 255, 255, 0.1)" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {markers.map(({ name, coordinates }, i) => (
            <Marker key={name} coordinates={coordinates as [number, number]}>
              <circle r={2.5} fill="#D9A441" />
              <circle 
                r={12} 
                fill="none" 
                stroke="#D9A441" 
                strokeWidth={1.5}
                className="animate-pulse-gold"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <text
                textAnchor="middle"
                y={-14}
                style={{ 
                  fontFamily: "inherit", 
                  fill: "#F4E0B9", 
                  fontSize: 7, 
                  fontWeight: 600, 
                  letterSpacing: "1px",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)"
                }}
              >
                {name.toUpperCase()}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
});
