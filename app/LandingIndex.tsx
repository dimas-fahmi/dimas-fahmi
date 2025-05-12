import React from "react";

const LandingIndex = () => {
  return (
    <div className="flex items-center justify-center h-dvh w-full text-center p-4">
      <div className="flex flex-col justify-center items-center">
        <img
          src={"/images/animations/under_construction.gif"}
          alt="Under Construction Animation"
        />
        <h1 className="font-bold text-2xl text-gray-500">Under Construction</h1>
        <p className="mt-4 text-sm text-gray-500">Still busy with TuskTask</p>
      </div>
    </div>
  );
};

export default LandingIndex;
