import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={toggle}
      className={`w-[33px] h-[18px] flex items-center rounded-full p-1 duration-300 ease-in-out ${isToggled ? 'bg-blue-600' : 'bg-[#D1D1D6]'}`}
    >
      <div
        className={`bg-white w-[12px] h-[12px] rounded-full shadow transform duration-300 ease-in-out ${isToggled ? 'translate-x-3' : ''}`}
      ></div>
    </button>
  );
};

export default ToggleButton;