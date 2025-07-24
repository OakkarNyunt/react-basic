import React from "react";

const button = ({btn, onPress}) => {
    const ok = 1;
    
   
  return (
    <>
        {ok && <h2>Click the button below</h2>}
        <button onClick={onPress}>{btn}</button>
    </>
  );
};

export default button;
