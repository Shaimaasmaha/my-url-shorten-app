import React from 'react';
import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 md:px-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Statistics</h2>
        <p className="text-gray-600">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="relative mt-20 flex flex-col md:flex-row items-start justify-center gap-12 md:gap-8">
        {/* Line connector */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-cyan-400 transform -translate-y-1/2"></div>
        
        {/* Card 1 */}
        <div className="relative bg-white p-8 rounded-lg shadow-md z-10 md:mt-0">
          <div className="absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:-translate-x-0 bg-violet-950 p-4 rounded-full">
            <img src={brandRecognitionIcon} alt="Brand Recognition" />
          </div>
          <h3 className="text-xl font-bold mt-8 mb-4">Brand Recognition</h3>
          <p className="text-gray-600">
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white p-8 rounded-lg shadow-md z-10 md:mt-10">
          <div className="absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:-translate-x-0 bg-violet-950 p-4 rounded-full">
            <img src={detailedRecordsIcon} alt="Detailed Records" />
          </div>
          <h3 className="text-xl font-bold mt-8 mb-4">Detailed Records</h3>
          <p className="text-gray-600">
            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white p-8 rounded-lg shadow-md z-10 md:mt-20">
          <div className="absolute -top-10 left-1/2 md:left-8 transform -translate-x-1/2 md:-translate-x-0 bg-violet-950 p-4 rounded-full">
            <img src={fullyCustomizableIcon} alt="Fully Customizable" />
          </div>
          <h3 className="text-xl font-bold mt-8 mb-4">Fully Customizable</h3>
          <p className="text-gray-600">
            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;