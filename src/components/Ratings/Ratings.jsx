import React, {useState} from 'react';
import "./Ratings.css";
import { FaStar } from 'react-icons/fa'

const Ratings = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="container">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar className="star" 
                        color={ratingValue <= (hover || rating) ? "#26d516" : "#3a3a3a"} 
                        size={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p>YOU GAVE THIS RECIPE {rating} STAR(S)</p>
        </div>
    )
}

export default Ratings
