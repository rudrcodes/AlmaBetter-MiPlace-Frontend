import React from 'react'

function Location() {
  return (
    <>
      <div className='w-full border-2 p-8 font-mullish flex-col space-x-4 space-y-4'>
        <h1 className='text-semibold  rounded text-2xl font-bold inline-block font-mullish '>Location/Map</h1>
        <button className='text-xl bg-blue-500 rounded text-white'>View on google maps</button>
    </div>
      {/* <div className='text-xl w-full p-4 font-mullish bg-gradient-to-r from-gray-500 via-black-500'>
      
    </div> */}
    </>
  )
}

export default Location