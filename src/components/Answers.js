import React from 'react'
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';
const Answers = ({ optionName }) => {
    return (
        <div className={classes.answers}>
            <label className={classes.answer} for={optionName}>
                <Checkbox text="Test Answer" id={optionName} />
            </label>
        </div>
    )
}

export default Answers