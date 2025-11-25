import React, { useRef, useEffect } from "react";
import Globe from "globe.gl";

const EARTH_IMG = "//unpkg.com/three-globe/example/img/earth-dark.jpg";
const BG_IMG = "//unpkg.com/three-globe/example/img/night-sky.png";

function Model({ width = 100, height = 300, points = null }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // clear previous globe and force container sizing BEFORE creating globe
    containerRef.current.innerHTML = "";
    containerRef.current.style.boxSizing = "border-box";
    containerRef.current.style.width = `${width}px`;
    containerRef.current.style.height = `${height}px`;
    containerRef.current.style.maxWidth = "none";
    containerRef.current.style.overflow = "hidden";
    // optional visible border for quick debug (remove later)
    // containerRef.current.style.border = "1px solid rgba(0,0,0,0.1)";

    // create globe and attach to container
    const globe = Globe()(containerRef.current)
      .globeImageUrl(EARTH_IMG)
      .backgroundImageUrl(BG_IMG)
      .showAtmosphere(true)
      .pointOfView({ lat: 20, lng: 0, altitude: 2 });

    // sample data if none provided
    const sampleData = [
      { lat: 37.7749, lng: -122.4194, size: 1, color: "red" }, // SF
      { lat: 51.5074, lng: -0.1278, size: 1, color: "orange" }, // London
    ];
    const data = points && points.length ? points : sampleData;

    globe
      .pointsData(data)
      .pointLat((d) => d.lat)
      .pointLng((d) => d.lng)
      .pointAltitude((d) => (d.size || 1) * 0.02)
      .pointColor((d) => d.color || "yellow");

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const adjustRenderer = () => {
      try {
        const maybeRenderer =
          typeof globe.renderer === "function" ? globe.renderer() : null;
        const canvas = containerRef.current.querySelector("canvas");

        if (maybeRenderer && typeof maybeRenderer.setSize === "function") {
          // updateStyle = true so renderer updates its DOM element CSS as well
          maybeRenderer.setSize(
            Math.round(width * dpr),
            Math.round(height * dpr),
            true
          );
          const domEl = maybeRenderer.domElement || canvas;
          if (domEl) {
            domEl.style.width = `${width}px`;
            domEl.style.height = `${height}px`;
            domEl.style.display = "block";
          }
        } else if (canvas) {
          canvas.width = Math.round(width * dpr);
          canvas.height = Math.round(height * dpr);
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;
          canvas.style.display = "block";
        } else {
          // canvas/renderer not yet created
          return false;
        }

        // ensure container remains exact size
        containerRef.current.style.width = `${width}px`;
        containerRef.current.style.height = `${height}px`;
        return true;
      } catch (err) {
        return false;
      }
    };

    // try immediately, then once more after a short delay if not ready
    if (!adjustRenderer()) {
      const t = setTimeout(() => adjustRenderer(), 50);
      // cleanup timeout on unmount
      return () => {
        clearTimeout(t);
        if (containerRef.current) containerRef.current.innerHTML = "";
      };
    }

    // normal cleanup
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [points, width, height]); // include width/height so changes take effect

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px`, maxWidth: "100%" }}
      aria-hidden="false"
    />
  );
}

export default Model;
