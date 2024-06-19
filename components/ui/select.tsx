// components/ui/select.tsx

import React from 'react';

export const Select = ({ children, ...props }) => {
  return <select {...props}>{children}</select>;
};

export const SelectContent = ({ children }) => {
  return <div className="select-content">{children}</div>;
};

export const SelectGroup = ({ children }) => {
  return <div className="select-group">{children}</div>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export const SelectLabel = ({ children }) => {
  return <label className="select-label">{children}</label>;
};

export const SelectTrigger = ({ children }) => {
  return <div className="select-trigger">{children}</div>;
};

export const SelectValue = ({ value }) => {
  return <div className="select-value">{value}</div>;
};
