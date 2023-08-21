import React from 'react'
import {quizPart} from './Question'


function Quiz(props) {
  return (
    <div>
      <div className="containerm">
        <h1 id='heading'>{props.heading}</h1>
        <div className="quiz_box">
            <div className="screen">
              <h1>{quizPart[0].question}</h1>
            </div>
            <div className="options">
                <div className="option a"></div>
                <div className="option b"></div>
                <div className="option c"></div>
                <div className="option d"></div>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
