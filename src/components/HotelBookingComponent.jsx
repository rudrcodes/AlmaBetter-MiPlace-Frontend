import React from 'react'

const HotelBookingComponent = ({ currency, hotelName, price, url, city, address, firstDay, secondDay, noOfDays }) => {

  return (
    <>
      <div class=" border-solid rounded-lg border-2 border-{A1A1A1} mx-auto w-[49.375rem] h-[24.8125rem] font-mullish">

        <div class="flex mx-[1.5rem] mt-[2rem] mb-[1.5rem] py-[1.5rem] justify-between">
          <h1 className='text-3xl font-semibold'>{hotelName}</h1>
          <h2>{price}/night</h2>
          {/* <h2>{formatCurrency(price,currency)}/night</h2> */}
        </div>

        <div class="flex mx-[1.5rem] mb-[2.5rem]  w-[46.375rem] h-[5.9375rem] py-[1.5rem] rounded-lg border-solid border-2 border-{A1A1A1} gap-[2rem]">
          <img src={url} alt='ALT' />
          <h2 ><span className='text-bold'>{hotelName}</span>, {address}</h2>
        </div>

        <div class="flex mx-[1.5rem] mb-[1.5rem]  w-[46.375rem] h-[3.0625rem] gap-[2rem] justify-between">
          <div>{firstDay}</div>
          <div>to</div>
          <div>{secondDay}</div>
        </div>

        <div class="ml-[1.5rem] "><button className='rounded-full w-[5rem] mb-2  border-solid border-2 border-{#A1A1A1} p-1'>{noOfDays} Days</button></div>


      </div>

    </>
  )
}

export default HotelBookingComponent

