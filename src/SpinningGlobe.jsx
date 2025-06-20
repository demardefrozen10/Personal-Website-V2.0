import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { MeshLambertMaterial, DoubleSide } from "three";
import * as topojson from "topojson-client";

const polygonsMaterial = new MeshLambertMaterial({
  color: "darkslategrey",
  side: DoubleSide,
});

export default function SpinningGlobe() {
  const globeEl = useRef();
  const [landPolygons, setLandPolygons] = useState([]);

  useEffect(() => {
    fetch("//unpkg.com/world-atlas/land-110m.json")
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(
          topojson.feature(landTopo, landTopo.objects.land).features
        );
      });
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.7;
  }, [landPolygons]);

  return (
    <div style={{ width: 100, height: 100 }}>
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        showGlobe={false}
        showAtmosphere={false}
        polygonsData={landPolygons}
        polygonCapMaterial={polygonsMaterial}
        polygonSideColor={() => "rgba(0,0,0,0)"}
        width={100}
        height={100}
      />
    </div>
  );
}