import React from 'react';

interface TrustBadgeProps {
  title: string;
  description: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TrustBadge;