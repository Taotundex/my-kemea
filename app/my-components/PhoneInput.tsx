// app/components/PhoneInput.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false });

const PhoneInputComponent = ({ value, onChange }) => {
  return (
    <PhoneInput
      country={'us'}
      value={value}
      onChange={onChange}
      containerClass="flex w-full my-1 px-[15px] py-[10px] border border-[#E2E8F0] rounded-[20px] bg-white outline-none"
      inputClass="w-full my-1 px-[15px] border border-none rounded-[20px] bg-white outline-none"
      buttonClass="rounded-l-md"
    />
  );
};

export default PhoneInputComponent;
