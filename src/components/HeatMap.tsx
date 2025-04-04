import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const HeatMap = () => {
  return (
    <div className="flex justify-center">
      <GitHubCalendar 
        username="PranjalTripathi2003"
        blockSize={12}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
      />
    </div>
  );
};

export default HeatMap;