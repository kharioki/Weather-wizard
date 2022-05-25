import Head from 'next/head';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Image from 'next/image'

import Search from '../components/Search'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const myLoader = ({ src, width, quality }) => {
    return `./public/assets/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="flex flex-1 flex-col min-h-screen h-screen font-mono text-gray-500 bg-white">
      <Head>
        <title>Weather Wizard</title>
        <meta name="description" content="A weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full h-full flex-1 sm:px-12 xl:px-24 sm:py-6 text-center dark:bg-gray-800">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full">
          <div className="flex flex-col items-center w-full lg:w-1/3 sm:py-2 lg:py-4 sm:px-8">
            <Search />

            <div className="flex flex-col items-center w-full h-full py-4 mt-4">
              <p className="text-sm text-gray-500 sm:mt-3">
                Location name
              </p>
              <div className="flex flex-col items-center w-full py-4 border-b border-gray-300 mb-2">
                <Image
                  src="/assets/10d.png"
                  alt="Weather icon"
                  width={200}
                  height={200}
                />
                <p className="text-8xl text-gray-800 mt-4">
                  26°
                </p>
              </div>
              <p className="text-sm text-gray-500 my-4">
                Mostly cloudy
              </p>
              <div className='flex flex-row justify-between w-full'>
                <div className="flex flex-col items-center w-full py-2 border-r border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-md text-gray-500 mt-4">
                    2022/05/25
                  </p>
                </div>
                <div className="flex flex-col items-center w-full py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-md text-gray-500 mt-4">
                    10.00 p.m
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:relative flex flex-col items-center w-full lg:w-2/3 py-4 px-2 bg-slate-50 rounded-lg">
            <div className="flex flex-col items-center w-full lg:h-52">
              <div className="absolute top-0 lg:top-3 left-0 flex flex-col w-4/5 items-center justify-center lg:bg-slate-50">
                <h1 className="text-2xl sm:text-4xl sm:text-center font-thin p-4">
                  Weather Wizard
                </h1>
              </div>
              <div className="absolute right-2 top-1 sm:top-8 flex flex-row space-x-1 sm:space-x-2 items-center justify-end w-1/4 lg:w-1/5">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={36}
                  moonColor="#333"
                  sunColor="#efcc00"
                />
                <button className="border border-gray-400 sm:p-2 w-8 sm:w-10 h-8 sm:h-10 rounded-full">
                  <h2 className='text-md sm:text-lg text-center'>°C</h2>
                </button>
                <button className="border border-gray-400 sm:p-2 w-8 sm:w-10 h-8 sm:h-10 rounded-full">
                  <h2 className='text-md sm:text-lg text-center'>°F</h2>
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center w-full h-full">
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-8 w-full px-4'>
                <div className="card">
                  <p className="text-md text-gray-500">Humidity</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-4xl text-gray-500">80%</p>
                    <Image
                      src="/assets/humidity.png"
                      alt="Humidity icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>

                <div className="card">
                  <p className="text-md text-gray-500">Atmospheric Pressure</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-3xl text-gray-500">1010 mb</p>
                    <Image
                      src="/assets/meter.png"
                      alt="pressure icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>

                <div className="card">
                  <p className="text-md text-gray-500">Wind Speed</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-3xl text-gray-500">6 km/h</p>
                    <Image
                      src="/assets/wind_speed.png"
                      alt="wind speed icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="text-md text-gray-500">Visibility</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-3xl text-gray-500">12 km</p>
                    <Image
                      src="/assets/visibility.png"
                      alt="visibility icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="text-md text-gray-500">Sunrise & Sunset</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-3xl text-gray-500">1010 mb</p>
                    <Image
                      src="/assets/sunrise.png"
                      alt="sunrise icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="text-md text-gray-500">Min & Max Temperature</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-3xl text-gray-500">1010 mb</p>
                    <Image
                      src="/assets/thermometer.png"
                      alt="thermometer icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="hidden sm:flex items-center justify-center w-full h-8 sm:h-16 dark:bg-gray-800">
        <a
          className="flex items-center justify-center hover:text-purple-400"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kharioki
        </a>
      </footer>
    </div>
  )
}
