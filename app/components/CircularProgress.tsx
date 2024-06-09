import React from 'react';

const CircularProgress = () => {
  return (
    <div className="relative flex items-center justify-center w-[200px] h-[200px]">
      <div className="absolute inset-0 rounded-full border-[14px] border-[#0666EB66]"></div>
      <div
        className="absolute inset-0 rounded-full border-[14px]"
        style={{ borderColor: '#0666EB transparent transparent transparent' }}
      ></div>
      <div className="flex items-center justify-center w-[200px] h-[200px] bg-white rounded-full text-center">
        <div>
          <div className="text-sm">Estimation</div>
          <div className="text-xl font-bold">2 756 €</div>
          <div className="text-sm">par mois<sup>1</sup></div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
