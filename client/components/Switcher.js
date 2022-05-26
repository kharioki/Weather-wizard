import React from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = ({ theme, setTheme, selectedTemperature, setSelectedTemperature }) => {
  return (
    <div className="absolute right-2 top-3 sm:top-8 flex flex-row space-x-1 sm:space-x-2 items-center justify-end w-1/4 lg:w-1/5">
      <DarkModeSwitch
        checked={theme === 'light'}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        size={36}
        moonColor="#333"
        sunColor="#efcc00"
      />
      <button
        className={`btn ${selectedTemperature === 'celsius' ? 'bg-gray-400 dark:bg-gray-800 text-white' : ''}`}
        onClick={() => setSelectedTemperature('celsius')}
      >
        <h2 className='text-md sm:text-lg text-center'>°C</h2>
      </button>
      <button
        className={`btn ${selectedTemperature === 'fahrenheit' ? 'bg-gray-400 dark:bg-gray-800 text-white' : ''}`}
        onClick={() => setSelectedTemperature('fahrenheit')}
      >
        <h2 className='text-md sm:text-lg text-center'>°F</h2>
      </button>
    </div>
  )
}

export default Switcher;
