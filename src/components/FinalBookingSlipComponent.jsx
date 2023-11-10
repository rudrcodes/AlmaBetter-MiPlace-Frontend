import React from 'react'
import "../components/styles.css";
function FinalBookingSlipComponent({ url, review, rating, address, price, noOfDays, rooms, currencyPrice, currency }) {
  
  function formatCurrency(amount, currencyCode) {
    const formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    });
    return formatter.format(amount);
  }

  function justNumbers(string) {
    var numsStr = parseFloat(string.match(/[\d.]+/));
    return numsStr;
  }
  let totalPrice = justNumbers(price)
  // console.log(totalPrice)
  return (
    <div id="div2" class=" gap-[1rem] mt-[2.5rem]  w-[28.125rem] h-[29.34375rem] border-black font-mullish ">
      <div class="flex gap-[2rem] justify-between mx-[2rem] my-[2rem]">
        <div className=' w-80		'>

          <img src={url} alt='ALT' className='object-center	object-cover	h-full	' />
        </div>
        <div className='gap-[1rem]'>
          <h3>{address}</h3>
          <h1>Superior room - 1 double bed or 2 twin beds</h1>
          <div class="flex gap-[0.5rem]">
            <div> <span className='text-bold'>Rating :</span>  {rating || "No Rating posted "} </div>
            <div><span className='text-bold'>Review :</span> {review || "No review Posted"}</div>
          </div>
        </div>


      </div>

      <div className='gap-[1rem] mx-[2rem]'>
        <div className='w-[20.125rem] h-[0.03125rem] bg-[#112211]'></div>
        <div><p>Your booking is protected by PhonePe</p></div>
        <div className='w-[20.125rem] h-[0.03125rem] bg-[#112211]'></div>
      </div>

      <div>
        <h2 className='text-bold'>Price Details : </h2>
        {/* <div className='flex justify-between'>
          <h3>Base Fare</h3>
          <h3>Rs 240</h3>
        </div> */}
        <div className='flex justify-between'>
          <h3>Number of Rooms</h3>
          <h3>{rooms}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Number of Nights </h3>
          <h3>{noOfDays + 1} Nights</h3>
        </div>
        <div className='flex justify-between'>
          <h3>For One Night</h3>
          <h3>{price}</h3>
        </div>

        <div> <hr></hr></div>

        <div className='flex justify-between'>
          <h3>Total</h3>
          <h3>{formatCurrency(currencyPrice * (noOfDays + 1) * rooms, currency)}</h3>
          {/* <h3>{price}</h3> */}
        </div>

      </div>



    </div>
  )
}

export default FinalBookingSlipComponent