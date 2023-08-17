import React from 'react'

function Quiz(props) {
  return (
    <div>
      <div className="containerm">
        <h1 id='heading'>{props.heading}</h1>
        <div className="quiz_box">
            <div className="screen">
            </div>
            <div className="options">
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
