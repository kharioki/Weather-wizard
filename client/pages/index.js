import Head from 'next/head';
import { useState, useContext } from 'react';
import Image from 'next/image'

import { ThemeContext } from '../context/ThemeContext';
import Search from '../components/Search'
import Switcher from '../components/Switcher';

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTemperature, setSelectedTemperature] = useState('celsius');

  return (
    <div className="flex flex-1 flex-col min-h-screen lg:h-screen font-mono text-gray-500 bg-white dark:bg-[#1e2b44]">
      <Head>
        <title>Weather Wizard</title>
        <meta name="description" content="A weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full h-full flex-1 sm:px-12 lg:px-8 xl:px-24 sm:py-6 text-center dark:bg-black">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full">
          <div className="flex flex-col items-center w-full lg:w-1/3 sm:py-2 lg:py-4 sm:px-8">
            <Search />

            <div className="flex flex-col items-center w-full h-full py-4 mt-4">
              <div className="flex flex-row space-x-2 items-center justify-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Location name
                </p>
              </div>
              <div className="flex flex-col items-center w-full py-2 xl:py-4 border-b border-gray-700 mb-2">
                <Image
                  src="/assets/10d.png"
                  alt="Weather icon"
                  width={180}
                  height={180}
                />

                <div className="flex flex-row space-x-2 justify-center w-full">
                  <p className="text-5xl xl:text-8xl text-gray-800 dark:text-gray-300 mt-6 xl:mt-4">
                    26
                  </p>
                  <p className="text-2xl text-gray-500 dark:text-gray-300 xl:mt-4">
                    {selectedTemperature === 'celsius' ? '°C' : '°F'}
                  </p>
                </div>
              </div>
              <p className="text-base text-gray-500 dark:text-gray-200 my-4">
                Mostly cloudy
              </p>
              <div className='flex flex-row justify-between w-full lg:py-2 my-6 lg:my-1 '>
                <div className="flex flex-col items-center w-full py-2 border-r border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-md text-gray-500 dark:text-gray-300 mt-4">
                    2022/05/25
                  </p>
                </div>
                <div className="flex flex-col items-center w-full py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-md text-gray-500 dark:text-gray-300 mt-4">
                    10.00 p.m
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:relative flex flex-col items-center w-full lg:w-2/3 py-4 px-2 bg-slate-50 dark:bg-gray-900 rounded-lg">
            <div className="flex flex-col items-center w-full lg:h-52">
              <div className="absolute top-0 lg:top-3 left-0 flex flex-col w-4/5 items-center justify-center lg:bg-slate-50 lg:dark:bg-gray-900">
                <h1 className="text-2xl sm:text-4xl sm:text-center font-thin p-4 dark:text-gray-200">
                  Weather Wizard
                </h1>
              </div>

              <Switcher
                theme={theme}
                setTheme={setTheme}
                selectedTemperature={selectedTemperature}
                setSelectedTemperature={setSelectedTemperature}
              />
            </div>

            <div className="flex flex-col items-center w-full h-full">
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 xl:gap-8 w-full px-4'>
                <div className="card">
                  <p className="card-title">Humidity</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="card-text text-xl xl:text-3xl">80%</p>
                    <Image
                      src="/assets/humidity.png"
                      alt="Humidity icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>

                <div className="card">
                  <p className="card-title">Atmospheric Pressure</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="card-text text-xl xl:text-3xl">1010 mb</p>
                    <Image
                      src="/assets/meter.png"
                      alt="pressure icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>

                <div className="card">
                  <p className="card-title">Wind Speed</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="card-text text-xl xl:text-3xl">6 km/h</p>
                    <Image
                      src="/assets/wind_speed.png"
                      alt="wind speed icon"
                      width={72}
                      height={72}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="card-title">Visibility</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <p className="card-text text-xl xl:text-3xl">12 km</p>
                    <Image
                      src="/assets/visibility.png"
                      alt="visibility icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="card-title">Sunrise & Sunset</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                      <p className="card-text text-sm xl:text-xl">Sunrise: <span className='card-text text-sm xl:text-xl'>6.13am</span></p>
                      <p className="card-text text-sm xl:text-xl">Sunset: <span className='card-text text-sm xl:text-xl'>6.38pm</span></p>
                    </div>
                    <Image
                      src="/assets/sunrise.png"
                      alt="sunrise icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="card">
                  <p className="card-title">Min & Max Temperature</p>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-center">
                      <p className="card-text text-base xl:text-xl">Min: <span className='card-text text-base xl:text-xl'>23°C</span></p>
                      <p className="card-text text-base xl:text-xl">Max: <span className='card-text text-base xl:text-xl'>29°C</span></p>
                    </div>
                    <Image
                      src="/assets/thermometer.png"
                      alt="thermometer icon"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="hidden xl:flex absolute bottom-4 items-center justify-center w-full h-8 sm:h-16 dark:bg-black">
        <a
          className="flex items-center justify-center hover:text-purple-400"
          href="https://kharioki.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          built by @Kharioki
        </a>
      </footer>
    </div>
  )
}
