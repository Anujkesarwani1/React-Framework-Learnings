import React from 'react'
import './Button.css'

const Button =({type="button", onClick, label, ...rest}) => {
  return (
    <button className="button" type={type} onCick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button;
