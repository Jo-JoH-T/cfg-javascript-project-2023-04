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






/*import React from 'react';

const Card= (props) =>{
    return( //with return we can only return one thing, eg<div>, so I cannot add an <h1> here
        <div className= 'tc bg-light-green dib br3 pa3 grow bw2 shadow-5'>
            <img alt= 'robot' src= {'https://www.google.com/search?q=rihanna&rlz=1C1CHBF_enGB1025GB1025&sxsrf=APwXEdfMflQlBQa9klVgqCrk1RpmoaeZDw:1681848326029&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiNvqegnbT-AhXYiVwKHcUQCpwQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1#imgrc=wuVLIw6hCAiObM'} />
            <div>
                <h2> {props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
};

export default Card;*/