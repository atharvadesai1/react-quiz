import React, {useState} from 'react'
import {quizPart} from './Question'

function Quiz(props) {
  const [i,seti] = useState(0)
  const [quest,setquest] = useState(quizPart[i].question)

  const nextQuestion = ()=>{
    if(i!==4){
      let m = i
      m +=1;
      seti(m)
      setquest(quizPart[i].question)
    }
    // else{
    //   let k = i
    //   k=i-1
    //   seti(k)
    //   setquest(quizPart[i].question)
    // }
  }

  const previousQuestion = ()=>{
    if(i!==0){
      let m = i
      m -=1;
      seti(m)
      setquest(quizPart[i].question)
    }
  //   else{
  //     let k = i
  //     k=i+1
  //     seti(k)
  //     setquest(quizPart[i].question)
  //   }
  }

  return (
    <div>
      <div className="containerm">
        <h1 id='heading'>{props.heading}</h1>
        <div className="quiz_box">
            <div className="screen">
              <h1>{quest}</h1>
            </div>
            <div className="options">
                <div className="option a"></div>
                <div className="option b"></div>
                <div className="option c"></div>
                <div className="option d"></div>
                <button onClick={previousQuestion}>Previous</button>
                <button onClick={nextQuestion}>Next</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
