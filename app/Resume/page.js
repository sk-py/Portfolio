"use client";
import React from "react";

const Resume = () => {
  return (
    <div className="lg:w-[80%] w-[85%] mx-auto">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "141.4286%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAFz93fvUzY/view?embed"
          allowFullScreen
          allow="fullscreen"
        ></iframe>
      </div>
      {/* <a
        href="https://www.canva.com/design/DAFz93fvUzY/view?utm_content=DAFz93fvUzY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="_blank"
        rel="noopener"
      >
        Final Resume
      </a>
      by shaikh */}
    </div>
  );
};

export default Resume;
