import React, { useState } from 'react';

export default function Search({ setSearch }) {

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      setSearch(event.target.value);
    }
  };

  const handleChange = (event) => {
    
  };

  return (
    <div className="flex rounded-3xl bg-gray-50">
      <span className="inline-flex items-center px-3 text-gray-500 text-sm">
        Search:
      </span>
      <input
        type="text"
        name="company-website"
        id="company-website"
        className="flex-1 block w-full bg-gray-50 sm:text-sm m-3 ml-0 focus:outline-none"
        //placeholder="www.example.com"
        onKeyDown={handleSubmit}
        onChange={handleChange}
      />
    </div>
  )
}