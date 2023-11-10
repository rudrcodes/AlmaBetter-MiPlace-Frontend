import React from 'react'
import image from '../images/Rectangle-3webp.webp'
import image1 from '../images/img4.webp'
import image2 from '../images/img2.webp'
import image3 from '../images/img3.webp'
import "./styles.css";
import { Link } from 'react-router-dom'

export const Popularplace = () => {
  return (

    <div className='mt-[2.246875rem]'>
      <h1 className='mx-[4.8rem] font-mullish text-2xl font-bold'> Popular Places</h1>

      <div id="popularsearch" className="flex justify-center items-center ">



        <div class="p-1 flex flex-wrap items-center justify-center hover:scale-105 transition ease-in-out delay-100 duration-300">
          <div class="flex-shrink-0  relative overflow-hidde rounded-lg max-w-xs shadow-xl ">
            <div class="relative  flex items-center justify-center p-3">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
              <img
                src={image}
                alt="" />
            </div>
            <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1"></span>
              <div class="flex justify-center items-center">
                <span class="block font-semibold text-xl font-mullish">Delhi</span>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="/searchResults">
                    Book Now
                  </a>
                </button> */}
              </div>
            </div>
          </div>


        </div>




        <div class="p-1 flex flex-wrap items-center justify-center hover:scale-105 transition ease-in-out delay-100 duration-300">


          <div class="flex-shrink-0  relative overflow-hidde rounded-lg max-w-xs shadow-lg">

            <div class="relative  flex items-center justify-center p-3">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
              <img
                src={image1}
                alt="" />

            </div>
            <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1"></span>
              <div class="flex justify-center items-center">
                <span class="block font-semibold text-xl font-mullish">Jaipur</span>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="/searchResults">
                    Book Now
                  </a>
                </button> */}
              </div>
            </div>
          </div>


        </div>

        <div class="p-1 flex flex-wrap items-center justify-center hover:scale-105 transition ease-in-out delay-100 duration-300">


          <div class="flex-shrink-0  relative overflow-hidde rounded-lg max-w-xs shadow-lg">

            <div class="relative  flex items-center justify-center p-3">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
              <img
                src={image2}
                alt="" />

            </div>
            <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1"></span>
              <div class="flex justify-center items-center">
                <span class="block font-semibold text-xl font-mullish">Gwalior</span>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="/searchResults">
                    Book Now
                  </a>
                </button> */}
              </div>
            </div>
          </div>


        </div>


        <div class="p-1 flex flex-wrap items-center justify-center hover:scale-105 transition ease-in-out delay-100 duration-300">


          <div class="flex-shrink-0  relative overflow-hidde rounded-lg max-w-xs shadow-lg">

            <div class="relative  flex items-center justify-center p-3">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
              <img
                src={image3}
                alt="" />

            </div>
            <div class=" text-brown inset-0 items-end px-6 pb-6 mt-6">
              <span class="block opacity-75 -mb-1"></span>
              <div class="flex justify-center items-center">
                <span class="block font-semibold text-xl font-mullish">Pune</span>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a href="/searchResults">
                    Book Now
                  </a>
                </button> */}
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}
