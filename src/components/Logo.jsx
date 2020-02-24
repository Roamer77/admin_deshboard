import React from 'react';
import logo from '../images/logo2.jpg'
import PropTypes from 'prop-types';


const Logo = (props) => {
    const  {width,height}=props;

    return (<img src={logo} alt="Logo" width={width} height={height} align="middle"/>);
};


Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};

Logo.defaultProps = {
    height: 100,
    width: 100
};


export default Logo;