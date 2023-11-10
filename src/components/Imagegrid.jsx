import React from 'react'
import image1 from "../images/rec.webp"
import image2 from "../images/frame.webp"

import "./styles.css";
function Imagegrid({ img }) {
    
    return (
        <>
          
            <div id="imggrid"className="flex space-x-2 justify-center m-auto py-16 px-4 max-w-[1500px] w-full">
                <div className="rounded-lg">
                   <img class="img"src={image1} className="object-cover rounded-lg md:w-full"></img>
                </div>

               {/* <div className="w-1/2 flex"> */}
                    {/* <div className="flex w-1/2 m-1">
                      <div className="flex-col h-full">
                        <img src={image1} className="object-cover m-1 h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover m-1 h-1/2 ">
                            </img>
                        </div>
                        {/* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */}
                     {/* </div>     */}
                <div id="img2"className=" w-1/2">
                    <img id="img12" src={image2} className="object-cover rounded-lg"></img>
                        {/* <div className="flex-col h-full">
                            <img src={image1} className="object-cover m-1 h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  m-1 h-1/2 ">
                            </img>
                        </div> */}
                        {/* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */}
                    {/* </div> */ 
                    /* <div className='flex-col h-full'>
                            <img src={image1} className="object-cover h-1/2 ">
                            </img>
                            <img src={image1} className="object-cover  h-1/2 ">
                            </img>
                        </div>   */} 
            </div>
           </div> 
                
        </>
    )
}

export default Imagegrid