import React from "react";
import Building1 from "./Building1";
import Building2 from "./Building2";
import Building3 from "./Building3";
import Building4 from "./Building4";

export default function Directory() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          marginBottom: "1rem", // Add margin between the rows
        }}
      >
        <div style={{ marginRight: "3rem" }}>
          <Building1 />
        </div>
        <div style={{ marginRight: "3rem" }}>
          <Building2 />
        </div>
        <div style={{ marginRight: "3rem" }}>
          <Building3 />
        </div>
        <div>
          <Building4 />
        </div>
      
      </div>
      
    </div>
  );
}
