import React from "react";

const log = () => {
  return (
    <>
      <div
        id='town'
        class='min-h-screen h-[100vh!important] w-full'
        style='position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: auto;'
      >
        <div style='width: 100%; height: 100%;'>
          <canvas style='display: block; width: 1026px; height: 913px;' data-engine='three.js r149' width='2052' height='1826'></canvas>
          <div style='position: absolute; width: 100%; height: 100%; overflow: hidden auto; top: 0px; left: 0px;'>
            <div style='position: sticky; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;'></div>
            <div style='height: 500%; width: 100%; pointer-events: none;'></div>
          </div>
        </div>
      </div>
      <div
        id='town'
        class='min-h-screen h-[100vh!important] w-full cursor-pointer  z-[-10] fixed inset-0'
        style='position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: auto;'
      >
        <div style='width: 100%; height: 100%;'>
          <canvas style='display: block; width: 1046px; height: 913px;' data-engine='three.js r149' width='2092' height='1826'></canvas>
          <div style='position: absolute; width: 100%; height: 100%; overflow: hidden auto; top: 0px; left: 0px;'>
            <div style='position: sticky; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;'></div>
            <div style='height: 700%; width: 100%; pointer-events: none;'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default log;
