import React from "react";

function Image({srcImg, altImg, widthImg, heightImg, ...rest}) {
   return (
      <img src={srcImg} alt={altImg} width={widthImg} height={heightImg} {...rest} />
   );
}
export default Image;

