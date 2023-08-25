import React from "react";
import { Typography as MuiTypography } from "@mui/material";


const Typography = ({variant, textData, ...rest}) => {
    return (
        <MuiTypography variant={variant} {...rest}>
            {textData}
        </MuiTypography>
        );
};
  
export default Typography; 

