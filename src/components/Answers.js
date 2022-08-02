import React from 'react'
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';
const Answers = ({ text, optionName }) => {
    return (
        <div className={classes.answers}>
            <label className={classes.answer} for={optionName}>
                <Checkbox text={null} id={optionName} />
                {text}
            </label>
        </div>
    )
}

export default Answers