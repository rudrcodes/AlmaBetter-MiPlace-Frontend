import React from 'react'
import image from '../images/BG (1).webp'
import image1 from '../images/BG-1 (1).webp'
import "./styles.css";
export default function Testimonial(){
  return (
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 font-mullish sm:py-32 lg:px-8">
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
   <h3 class="text-sky-500 font-semibold text-center">TESTIMONIALS</h3>
              <h1 class="font-popins text-6xl font-semibold text-center md:text-3xl">Don’t just take our words</h1>

    <div id ="testimonial"class="flex mt-10 justify-between space-x-[3rem] ">

            <div class="flex mx-auto ">
                
                       <div class="flex space-x-4 ">
                       <img class="mx-auto h-30 w-30  " 
                       src={image}
                       alt=""/>
                       
                       
                       <div class=" text-left   space-x-3 text-base">
                           <div class="font-semibold text-gray-900  ">Judith Black</div>
                               <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                   <circle cx="1" cy="1" r="1" />
                               </svg>
                            <p class="text-left">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                           <div class="text-gray-600">CEO of Workcation</div>
                       </div>
                       </div>
            </div>
                  <div id="testimonial2"class="flex mx-auto ">
                <div class="flex space-x-4">
                <img class="mx-auto h-30 w-30  " 
                       src={image1}
                       alt=""/>       
                          <div class=" text-left  space-x-3  text-base">
                           <div class="font-semibold text-gray-900">Judith Black</div>
                               <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                   <circle cx="1" cy="1" r="1" />
                               </svg>
                            <p class="text-left">"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."</p>
                           <div class="text-gray-600 items-start">CEO of Workcation</div>
                       </div>
                       </div>
                  </div>
    </div>
  </div>
</section>  
)
}
