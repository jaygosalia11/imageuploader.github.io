

import React, { useState } from "react";

const Grid = ({ photos }) => {
  const [flippedImages, setFlippedImages] = useState({});

  const handleImageClick = (_id) => {
    // Toggle the flipped state for the clicked image
    setFlippedImages((prevState) => ({
      ...prevState,
      [_id]: !prevState[_id] || false,
    }));
  };

  return (
    <>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div
            key={_id}
            className={`grid__item ${flippedImages[_id] ? "flip-image" : ""}`}
            onClick={() => handleImageClick(_id)} // Toggle flip on click
          >
            <img
              src={`http://localhost:9000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;







