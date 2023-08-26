import React from 'react'

function Result(props) {
  return (
    <div className='quiz_box'>
      <h1>Leader Board</h1><br/><b/>
      <h2>Evaluation you answers:</h2>
      <ul>
        <li><h4>Q1. {props.rightWrong[0]}</h4></li>
        <li><h4>Q2. {props.rightWrong[1]}</h4></li>
        <li><h4>Q3. {props.rightWrong[2]}</h4></li>
        <li><h4>Q4. {props.rightWrong[3]}</h4></li>
        <li><h4>Q5. {props.rightWrong[4]}</h4></li>
      </ul><br />
        <h2>Total Score: {props.score}/{props.totalQuestion}</h2>
    </div>

  )
}

export default Result
