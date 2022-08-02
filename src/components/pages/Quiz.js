import React from 'react'
import Answers from '../Answers'
import MiniPlayer from '../MiniPlayer'
import ProgressBar from '../ProgressBar'

const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers text="A New Hope 1" optionName="option1" />
            <ProgressBar />
            <MiniPlayer />
        </>
    )
}

export default Quiz