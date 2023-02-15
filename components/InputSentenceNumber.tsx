import React from 'react';

interface InputSentenceNumberProps {
  name: string;
  label: string;
  value: number | '';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSentenceNumber: React.FC<InputSentenceNumberProps> = ({
  name,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="flex space-x-2">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="number"
        value={value}
        onChange={onChange}
        className="w-20"
      />
    </div>
  );
};

export default InputSentenceNumber;
