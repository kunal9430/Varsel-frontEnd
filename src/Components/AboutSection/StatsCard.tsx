import React from 'react';
import type { StatsData } from '../../Data/aboutSectionData';

interface StatsCardProps {
  data: StatsData;
}

const StatsCard: React.FC<StatsCardProps> = ({ data }) => {
  return (
    <div className="stats-card text-center p-4">
      <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${data.color} mb-1 sm:mb-2`}>
        {data.value}
      </div>
      <div className="text-base sm:text-lg font-medium text-gray-300">
        {data.label}
      </div>
    </div>
  );
};

export default StatsCard;