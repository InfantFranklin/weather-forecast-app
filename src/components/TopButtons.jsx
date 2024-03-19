import React from 'react'

const TopButtons = () => {
  const cities = [
    {
      id:1,
      title:'London'
    },
    {
      id:2,
      title:'Paris'
    },
    {
      id:3,
      title:'Tokyo'
    },
    {
      id:4,
      title:'Toronto'
    },
    {
      id:5,
      title:'Dubai'
    },
  ]
  return (
    <div className= 'flex items-center justify-around my-6'>
      {
        cities.map(({id,title}) => (
          <div className='text-white text-lg font-medium ' key={id}>{title}</div>
        ))
      }
    </div>
  )
}

export default TopButtons