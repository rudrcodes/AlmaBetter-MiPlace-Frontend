import React from 'react';
import Rating from './Rating';
import user1Image from '../images/girl.jpg'
import user2Image from '../images/girl2.png';
import { Link } from 'react-router-dom';
import { WriteReview } from './WriteReview';


const reviews = [
    {
        user: {
            name: 'John Doe',
            image: user1Image,
        },
        rating: 4.5,
        reviewText: "Great product! I'm really satisfied with my purchase.",
    },
    {
        user: {
            name: 'Jane Smith',
            image: user2Image,
        },
        rating: 3,
        reviewText: 'Excellent quality and fast delivery. Highly recommended!',
    },
    {
        user: {
            name: 'Jane Smith',
            image: user2Image,
        },
        rating: 4.2,
        reviewText: 'Excellent quality and fast delivery. Highly recommended!',
    },
    {
        user: {
            name: 'Jane Smith',
            image: user2Image,
        },
        rating: 3.5,
        reviewText: 'Excellent quality and fast delivery. Highly recommended!',
    },
    {
        user: {
            name: 'Jane Smith',
            image: user2Image,
        },
        rating: 3.5,
        reviewText: 'Excellent quality and fast delivery. Highly recommended!',
    },

];

const ReviewsComponent = () => {
    return (
        <div className="w-4xl mx-auto p-4 bg-blue-600 rounded">
            <div className="w-1407px h-740px p-0 space-y-4 overflow-y-scroll ">
                <div className=" flex items-center justify-between mb-4">
                        <h1 className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded text-white text-2xl font-bold inline-block font-mullish hover:shadow-indigo-500/40">Reviews</h1>
                    <Link to="/writeReview">
                        <button className="bg-deepBlue text-white py-2 px-4 rounded  font-mullish">
                            Give Your Review
                        </button>
                    </Link>
                </div>
                {reviews.map((review, index) => (
                    <div key={index} className="flex items-center space-x-4 nh font-mullish  bg-gradient-to-r from-gray-500 via-black-500 hover:from-cyan-500 hover:to-blue-500">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                                src={review.user.image}
                                alt={`${review.user.name}'s Profile`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-semibold">{review.user.name}</h4>
                                <Rating value={review.rating} />
                            </div>
                            <p className="text-white">{review.reviewText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsComponent;


