import React from "react";
import FeatureItem from "./feature-item";

const features = [
  // Add your features here
  {
    title: "Open Source",
    description: "This is an open source feature description.",
  },
  {
    title: "Open Source",
    description: "This is an open source feature description.",
  },
  // ...more features
];

const FeaturesWindow: React.FC = () => {
  return (
    <div className="absolute left-0 transform -translate-x-1/2 bg-gray-800 text-white w-screen mt-1">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            logo={<div>{/* Your logo here */}</div>}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesWindow;
