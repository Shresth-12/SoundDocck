import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setComplete(true);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 bg-gray-100 z-50 transition-all duration-700 ${complete ? 'translate-y-[-100%]' : ''}`}>
      <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden relative px-4">
        <div className="w-3/4 h-8 bg-gray-300 relative overflow-hidden rounded">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-200 rounded flex items-center justify-center text-white font-semibold"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
        <div className="absolute bottom-6 w-full text-center text-gray-800 font-bold text-lg select-none">
          Zenith Studio
        </div>
      </div>
    </div>
  );
};

export default Loader;
