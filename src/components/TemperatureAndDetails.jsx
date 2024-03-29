import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-6 text-xl font-medium text-cyan-300'>
                <p>Cloudy</p>
            </div>

            <div className='flex flex-row justify-between text-white items-center py-3'>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-20' />
                <p className=' text-white text-5xl '>34 °</p>
                <div className=' flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTemperature size={18} className='mr-1' />
                        Real feel: <span className='ml-1 font-medium'> 32 °</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className='mr-1' />
                        Humidity: <span className='ml-1 font-medium'> 65%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilWind size={18} className='mr-1' />
                        Wind: <span className='ml-1 font-medium'> 11 km/h</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 '>
                <UilSun />
                <p className='font-light '>
                    Rise: <span className='font-medium ml-1 '>06:45 AM</span>
                </p>
                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light '>
                    Set: <span className='font-medium ml-1 '>07:45 PM</span>
                </p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light '>
                    High: <span className='font-medium ml-1 '>45°</span>
                </p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light '>
                    Low: <span className='font-medium ml-1 '>40°</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails