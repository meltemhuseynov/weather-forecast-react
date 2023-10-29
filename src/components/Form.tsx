import React, { useState } from "react";

interface FormProps {
  // getApi: (cityName: string) => void;
  cityNameCb: (name: string) => void;
}

export const Form = ({ cityNameCb }: FormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cityName = inputValue;
    cityNameCb(cityName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Please enter the city name..."
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
