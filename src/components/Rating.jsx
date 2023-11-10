import React from 'react';

const Rating = ({ value }) => {
    const filledStars = Math.floor(value);
    const hasHalfStar = value - filledStars >= 0.5;

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.449l1.732 4.442h4.518l-3.654 2.821 1.732 4.442-3.654-2.821-3.654 2.821 1.732-4.442-3.654-2.821h4.518z" clipRule="evenodd" /></svg>);
            } else if (hasHalfStar && i === filledStars) {
                stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.947 7.692L6.599 4.87V9.61l3.654 2.821-1.732 4.442 3.654-2.821 3.654 2.821-1.732-4.442 3.654-2.821V4.87l2.652 2.821H3.947z" clipRule="evenodd" /></svg>);
            } else {
                stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.449l1.732 4.442h4.518l-3.654 2.821 1.732 4.442-3.654-2.821-3.654 2.821 1.732-4.442-3.654-2.821h4.518z" clipRule="evenodd" /></svg>);
            }
        }

        return stars;
    };

    return (
        <div className="flex items-center space-x-1">
            {renderStars()}
        </div>
    );
};

export default Rating;

