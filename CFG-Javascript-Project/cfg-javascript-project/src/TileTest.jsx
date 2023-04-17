import React, { useState } from "react";

const TileTest = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const { message } = props;

  return (
    <div>
      <div>
        <div className="Square" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {message}
        </div>

        {isHovering && <div >{message}</div>}
      </div>
    </div>
  );
};

export default TileTest;