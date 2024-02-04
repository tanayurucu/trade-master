import React from "react";

interface NumericalCardContentProps {
  title: string;
  value: number | string;
  info: string;
}

const NumericalCardContent = ({ title, value, info }: NumericalCardContentProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center">{title}</h2>
      <div className="text-3xl text-center">{value}</div>
    </div>
  );
};

export default NumericalCardContent;
