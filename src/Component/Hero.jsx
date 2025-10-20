import React from 'react'
import illustration from '../assets/images/illustration-working.svg'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-20 bg-white">
      <div className="p-4 md:p-4 text-center md:text-left flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          More than just shorter links
        </h1>
        <p className="mb-8 font-bold md:text-lg text-gray-600">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-300 text-white px-6 py-2 rounded-full">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2  flex justify-center md:justify-end flex-1 overflow-hidden">
        <img
          src={illustration}
          alt="Working Illustration"
          className="w-full max-w-md md:max-w-xl h-auto"
        />
      </div>
    </div>
  )
}

export default Hero;
