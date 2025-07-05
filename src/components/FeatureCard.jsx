import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="bg-[#e6f4e2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-[#3dae2b]" />
      </div>
      <h3 className="text-xl font-semibold text-dark mb-4">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
