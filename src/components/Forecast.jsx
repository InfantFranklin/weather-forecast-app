import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='font-medium text-xl text-white uppercase'>{title}</p>
        </div>

        <hr className='my-2'/>
        
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-12 my-1'/>
                <p className='font-medium'>40°</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-12 my-1'/>
                <p className='font-medium'>40°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-12 my-1'/>
                <p className='font-medium'>40°</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-12 my-1'/>
                <p className='font-medium'>40°</p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" className='w-12 my-1'/>
                <p className='font-medium'>40°</p>
            </div>

        </div>
        

    </div>
  )
}

export default Forecast