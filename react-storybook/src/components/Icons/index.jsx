import { SvgIcon } from "@mui/material";
import React from "react";


const Icons = ({ name,...props }) => {
  return (
    <>
    <SvgIcon data-testid = "icon" {...props}>
        {name}
    </SvgIcon>
    </>
  );
};

export default Icons;