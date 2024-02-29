import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn_primary', 'btn_outline'];
const SIZES = ['btn_medium', 'btn_large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign_up' className='btnMobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
