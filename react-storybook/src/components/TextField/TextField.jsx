import React from 'react'

const TextField = ({ids, textData, ...props }) => {
    return (
      <input type="text" id={ids} name={ids} value={textData} {...props}/>
    );
  };
  
  export default TextField;