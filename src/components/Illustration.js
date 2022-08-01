import React from 'react'
import classes from '../styles/Illustration.module.css';
import signupLogo from '../assets/images/signup.svg';
const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={signupLogo} alt="Signup" />
        </div>
    )
}

export default Illustration