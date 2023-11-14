import React, { useState } from "react";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleChange = (event) => {
    setSelectedRating(event.target.value);
  };

  return (
    <>
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          value="1"
          className="mask mask-star-2 bg-orange-400"
          checked={selectedRating === "1"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="rating-2"
          value="2"
          className="mask mask-star-2 bg-orange-400"
          checked={selectedRating === "2"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="rating-3"
          value="3"
          className="mask mask-star-3 bg-orange-400"
          checked={selectedRating === "3"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="rating-4"
          value="4"
          className="mask mask-star-4 bg-orange-400"
          checked={selectedRating === "4"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="rating-5"
          value="5"
          className="mask mask-star-5 bg-orange-400"
          checked={selectedRating === "5"}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Rating;
