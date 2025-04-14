import React from 'react';

const AdComponent: React.FC = () => {
  return (
        <div className="ad-slot mt-8 h-[250px] bg-white dark:bg-base-800 rounded-lg flex items-center justify-center transition-colors duration-300">
            <p className="text-base-500 dark:text-base-400">Advertisement</p>
        </div>
    
  );
};

export default AdComponent;