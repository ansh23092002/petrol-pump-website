"use client";

import Snowfall from "react-snowfall";

export default function SnowfallEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <Snowfall
        color="#ffffff"
        snowflakeCount={100}
        speed={[0.5, 1.5]}
        wind={[-0.5, 0.5]}
        radius={[0.5, 3.0]}
      />
    </div>
  );
}
