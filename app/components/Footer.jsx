import React from "react";

function Footer() {
  return (
    <div className="w-full mt-8  px-4 pt-8 max-w-6xl mx-auto">
      <div>
        <div className="border dark:border-neutral-600 border-neutral-200" />
        <div className="flex justify-between  py-5 items-center text-neutral-600 text-sm">
          <div className="flex ">
            <span>©</span>
            <p>Sk-py</p>
          </div>

          <p>Developed by Mubashir Shaikh</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
