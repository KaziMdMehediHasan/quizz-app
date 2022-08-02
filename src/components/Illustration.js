import React from 'react'
import classes from '../styles/Illustration.module.css';

const Illustration = ({ logo }) => {
    return (
        <div className={classes.illustration}>
            <img src={logo} alt="Signup" />
        </div>
    )
}

export default Illustration