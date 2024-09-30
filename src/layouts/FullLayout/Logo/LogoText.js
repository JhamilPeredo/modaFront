import React from "react";
import logotxt from "../../../assets/images/products/logo.jpg";
const LogoText = (props) => {
  
  return (
    <img alt="Logo" src={logotxt} {...props} />
    )
  ;};

export default LogoText;
