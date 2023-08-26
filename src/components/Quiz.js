import React, {useState} from 'react'
import {quizPart} from './Question'
// import Result from './Result'

let selectedvalue = [];
// let check = [];
const check  = [];
// const space = "";


function Quiz(props) {
  const [showscore, setshowscore] = useState(false)
  const[signal,setsignal] = useState([0,0,0,0])
  const[score, setscore] = useState(0)
  const [i,seti] = useState(0)
  const[allow,setallow] = useState(0)
  const [quest,setquest] = useState(quizPart[i].question)
  const [quest_optionA, setquest_optionA] = useState(quizPart[i].option_given[0])
  const [quest_optionB, setquest_optionB] = useState(quizPart[i].option_given[1])
  const [quest_optionC, setquest_optionC] = useState(quizPart[i].option_given[2])
  const [quest_optionD, setquest_optionD] = useState(quizPart[i].option_given[3])
  const [optionClassA, setoptionClassA] = useState("btn btn-warning")
  const [optionClassB, setoptionClassB] = useState("btn btn-warning")
  const [optionClassC, setoptionClassC] = useState("btn btn-warning")
  const [optionClassD, setoptionClassD] = useState("btn btn-warning")

  // let allow = 0


  const selectedOptionFcnA = ()=>{
    setoptionClassA("btn btn-success")
    setoptionClassB("btn btn-warning")
    setoptionClassC("btn btn-warning")
    setoptionClassD("btn btn-warning")
    setsignal([1,0,0,0])
  }
  const selectedOptionFcnB = ()=>{
    setoptionClassA("btn btn-warning")
    setoptionClassB("btn btn-success")
    setoptionClassC("btn btn-warning")
    setoptionClassD("btn btn-warning")
    setsignal([0,1,0,0])
  }
  const selectedOptionFcnC = ()=>{
    setoptionClassA("btn btn-warning")
    setoptionClassB("btn btn-warning")
    setoptionClassC("btn btn-success")
    setoptionClassD("btn btn-warning")
    setsignal([0,0,1,0])
  }
  const selectedOptionFcnD = ()=>{
    setoptionClassA("btn btn-warning")
    setoptionClassB("btn btn-warning")
    setoptionClassC("btn btn-warning")
    setoptionClassD("btn btn-success")
    setsignal([0,0,0,1])
  }

  const nextQuestion = ()=>{
    console.log("Hurreyyy")
    setoptionClassA("btn btn-warning")
    setoptionClassB("btn btn-warning")
    setoptionClassC("btn btn-warning")
    setoptionClassD("btn btn-warning")

    // if(i===5){
    //   return null;
    // }

    if(i<5){   
      for(let k=0;k<signal.length;k++){
        if(signal[k]===1){
          console.log(signal)
          selectedvalue.push(k);
          console.log(selectedvalue)
        }
      }
    }
    
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
      }
      else{
        // m = i
        // m +=1;
        // seti(m)
        // setquest(quizPart[m].question)
        // setquest_optionA(quizPart[m].option_given[0])
        // setquest_optionB(quizPart[m].option_given[1])
        // setquest_optionC(quizPart[m].option_given[2])
        // setquest_optionD(quizPart[m].option_given[3])
        console.log("aagaya bhaiiii")
        let score_val =0
        if(allow===0){ 
            setallow(1)      
            for(let k=0;k<quizPart.length;k++){
              console.log(selectedvalue[k])
              if(selectedvalue[k]===quizPart[k].answer){
                  check.push('Correct');
                  score_val+=1
                  setscore(score_val)
              }
              else{
                  check.push('Incorrect');
              }
            }
            setshowscore(true)
            console.log(check)
        }
        
    }


  }


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
                  {/* <button id="prev"className="btn btn-info" onClick={previousQuestion}>Previous</button> */}
                  <button id="next" className="btn btn-info" onClick={nextQuestion}>Next</button>
                </div>
            </div>
          </div><br/><br/>         
        </div>

        <h2 id='scoreboard'>{showscore?`Score: ${score}/${quizPart.length}`:``}</h2>
        <h2 id='resultboard'>{showscore?`Result: ${check}`:``}</h2>

        {/* <h2>
          {showscore?<h1>{check}</h1>:``}   
        </h2> */}
    </div>
  )
}

export default Quiz;

