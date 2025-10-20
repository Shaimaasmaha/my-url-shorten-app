import React from 'react';
const Main = () => {
  return (
    <div
      className="
        flex flex-col
        items-center justify-center
        py-20 px-6
        text-center
        bg-no-repeat bg-cover
        bg-violet-950
        bg-[url('./assets/images/bg-boost-mobile.svg')]
        md:bg-[url('./assets/images/bg-boost-desktop.svg')]
      "
    >
      <h2 className="text-4xl font-bold mb-6 text-white">
        Boost your links today
      </h2>
      <button className="bg-cyan-400 hover:bg-cyan-300 text-white px-6 py-3 rounded-full">
        Get Started
      </button>
    </div>
  );
};
export default Main;