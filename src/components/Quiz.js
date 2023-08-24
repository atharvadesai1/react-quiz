import React, {useState} from 'react'
import {quizPart} from './Question'

function Quiz(props) {
  const [i,seti] = useState(0)
  const [quest,setquest] = useState(quizPart[i].question)
  const [quest_optionA, setquest_optionA] = useState(quizPart[i].option_given[0])
  const [quest_optionB, setquest_optionB] = useState(quizPart[i].option_given[1])
  const [quest_optionC, setquest_optionC] = useState(quizPart[i].option_given[2])
  const [quest_optionD, setquest_optionD] = useState(quizPart[i].option_given[3])
  const [optionClassA, setoptionClassA] = useState("btn btn-outline-warning")
  const [optionClassB, setoptionClassB] = useState("btn btn-outline-warning")
  const [optionClassC, setoptionClassC] = useState("btn btn-outline-warning")
  const [optionClassD, setoptionClassD] = useState("btn btn-outline-warning")

  // const [score, setscore] = useState(0)
  // let signal = [0,0,0,0]
  // let selectedOption = [-1,-1,-1,-1,-1]
  



  const nextQuestion = ()=>{
    setoptionClassA("btn btn-outline-warning")
    setoptionClassB("btn btn-outline-warning")
    setoptionClassC("btn btn-outline-warning")
    setoptionClassD("btn btn-outline-warning")

    let m
    if(i<4){
      m = i
      m +=1;
      seti(m)
      setquest(quizPart[m].question)
      setquest_optionA(quizPart[m].option_given[0])
      setquest_optionB(quizPart[m].option_given[1])
      setquest_optionC(quizPart[m].option_given[2])
      setquest_optionD(quizPart[m].option_given[3])
      console.log(m)
    }
    else{
      m = i
      seti(m)
      setquest(quizPart[m].question)
      setquest_optionA(quizPart[m].option_given[0])
      setquest_optionB(quizPart[m].option_given[1])
      setquest_optionC(quizPart[m].option_given[2])
      setquest_optionD(quizPart[m].option_given[3])
    }
  }

  const previousQuestion = ()=>{
    let m
    if(i>0){
      m = i
      m -=1;
      seti(m)
      setquest(quizPart[m].question)
      setquest_optionA(quizPart[m].option_given[0])
      setquest_optionB(quizPart[m].option_given[1])
      setquest_optionC(quizPart[m].option_given[2])
      setquest_optionD(quizPart[m].option_given[3])
      console.log(m)
    }
    else{
      m = i
      seti(m)
      setquest(quizPart[m].question)
      setquest_optionA(quizPart[m].option_given[0])
      setquest_optionB(quizPart[m].option_given[1])
      setquest_optionC(quizPart[m].option_given[2])
      setquest_optionD(quizPart[m].option_given[3])
    }
  }

  const selectedOptionFcnA = ()=>{
    setoptionClassA("btn btn-warning")
    setoptionClassB("btn btn-outline-warning")
    setoptionClassC("btn btn-outline-warning")
    setoptionClassD("btn btn-outline-warning")
    // signal = [1,0,0,0]
  }
  const selectedOptionFcnB = ()=>{
    setoptionClassA("btn btn-outline-warning")
    setoptionClassB("btn btn-warning")
    setoptionClassC("btn btn-outline-warning")
    setoptionClassD("btn btn-outline-warning")
    // signal = [0,1,0,0]
  }
  const selectedOptionFcnC = ()=>{
    setoptionClassA("btn btn-outline-warning")
    setoptionClassB("btn btn-outline-warning")
    setoptionClassC("btn btn-warning")
    setoptionClassD("btn btn-outline-warning")
    // signal = [0,0,1,0]
  }
  const selectedOptionFcnD = ()=>{
    setoptionClassA("btn btn-outline-warning")
    setoptionClassB("btn btn-outline-warning")
    setoptionClassC("btn btn-outline-warning")
    setoptionClassD("btn btn-warning")
    // signal = [0,0,0,1]
  }

  // if(m)

  // console.log(score)

  // const [buttonContent, setbuttonContent] = useState(
  //   <div className="pfButtons">
  //     <button id="prev"className="btn btn-info" onClick={previousQuestion}>Previous</button>
  //     <button id="next" className="btn btn-info" onClick={nextQuestion}>Next</button>
  //   </div>
  // )

  return (
    <div>
      <div className="containerm">
        <h1 id='heading'>{props.heading}</h1>
        <div className="quiz_box">
            <div className="screen">
              <h2>{quest}</h2>
            </div>
            <div className="options">
                <button className={optionClassA} onClick={selectedOptionFcnA}><h4>A. {quest_optionA}</h4></button>
                <button className={optionClassB} onClick={selectedOptionFcnB}><h4>B. {quest_optionB}</h4></button>
                <button className={optionClassC} onClick={selectedOptionFcnC}><h4>C. {quest_optionC}</h4></button>
                <button className={optionClassD} onClick={selectedOptionFcnD}><h4>D. {quest_optionD}</h4></button>
                {/* {buttonContent} */}
                <div className="pfButtons">
                  <button id="prev"className="btn btn-info" onClick={previousQuestion}>Previous</button>
                  <button id="next" className="btn btn-info" onClick={nextQuestion}>Next</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
