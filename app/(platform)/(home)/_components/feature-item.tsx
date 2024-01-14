import React from 'react';

interface FeatureItemProps {
  logo: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ logo, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-gray-700 rounded-lg cursor-pointer">
      <div>{logo}</div>
      <div>
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default FeatureItem;
