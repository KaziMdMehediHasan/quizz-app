import React from 'react'
import classes from '../styles/Form.module.css';
const Form = ({ children, className, ...rest }) => {
    return (
        <form className={`${children} ${classes.form}`} action="#" {...rest}>
            {children}
        </form>
    )
}

export default Form