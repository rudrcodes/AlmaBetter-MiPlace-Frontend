import React from 'react';
import backgroundImage from '../images/scene.webp';
import { PlaceSearchBarComponent } from './PlaceSearchBarComponent';
import { Link } from 'react-router-dom';
import "./styles.css";

const HomeCard = () => {
    const cardStyle = {

    };
    return (
        // <div className="home-card bg-cover bg-center h-[500px] overflow-x-hidden" >
        <div  id = "imgback"className="home-card bg-cover bg-center h-[500px] relative" style={{ ...cardStyle, backgroundImage: `url(${backgroundImage})` }}>
            <div className=' bottom-6 w-full absolute'>
                {/* <div className=' bottom-0 w-full absolute flex justify-center items-center'> */}
                {/* <div className='bg-white w-11/12'> */}
                <div id="homecard"className='flex justify-center items-center flex-col'>
                    <h1 id="txt" class="text-3xl text-white text-center pb-10 font-mullish font-bold ">Hotels For Moments are Rich in Emotions</h1>

                    <PlaceSearchBarComponent />
                    {/* <button className='bg-[#196680] px-2 py-2 text-white w-11/12 text-semibold text-lg rounded-md'>
                        <Link to="/searchResults"  >

                            Search
                        </Link>
                    </button> */}
                    {/* <Link to="/searchResults" className='bg-[#196680] px-2 py-2 text-white w-11/12 text-semibold text-lg rounded-md hover:bg-sky-600 transition-all duration-500 ease-in'  >
                        <button className='w-full '>

                            Search
                        </button>
                    </Link> */}
                </div>

                {/* </div> */}
            </div>
        </div>
    )
}

export default HomeCard;
