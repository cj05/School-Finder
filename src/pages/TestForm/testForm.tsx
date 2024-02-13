import styles from './aboutmeComponent.module.scss';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import RevertTab from '../../assets/Components/revertTab';
import TestChoice from '../../assets/Components/testChoiceForm'
import { useState, useEffect, memo, ReactElement  } from 'react'
import RadioSel from '../../assets/Components/selectingComponent/Radio'
const about = () => {
  const [currentChoiceIndex, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState([0])
  const test = {
    Choice: [
      { Q: "$$|a+b$$", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 },
      { Q: "$$|tan(arccos(2/13)+arcsin(3/5))$$", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","207/8"], ["2","209/8"], ["3","1/8"], ["4","16/63"]], "R": 2 , "W": 1},
      { Q: `ให้ $$|𝑝(𝑥) = 𝑥^3 + (𝑘 − 1)𝑥^2 − 𝑘^3$$ เมื่อ 𝑘 เป็นจำนวนจริงลบ ถ้าเศษเหลือจากการหาร 𝑝(𝑥) ด้วย 𝑥 − 3
      เท่ากับ 18 แล้วเศษเหลือจากการหาร 𝑝(𝑥) ด้วย 2𝑥 + 1 เท่ากับเท่าใด (A-Level คณิต 1 ปี 66)`, "C": [["1","207/8"], ["2","209/8"], ["3","1/8"], ["4","16/63"]], "R": 2 },
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
      { Q: "tan(arccos(5/13)+arcsin(3/5))", "C": [["1","9/8"], ["2","-63/16"], ["3","-9/8"], ["4","63/16"]], "R": 2 , "W": 1},
    ],
    Count: 10,
    name: "Maths",
  }
  const Choice = test.Choice
  const Q = Choice[currentChoiceIndex].Q
  const C = Choice[currentChoiceIndex].C
  const R = Choice[currentChoiceIndex].R

  const [userAnswer, setAnswer] = useState(Array(test.Count))

  function setChoiceIndex(x) {
    setIndex((a) => Math.max(Math.min(a + x, test.Count - 1), 0))
  }

  function calculateResult(){
    var score = 0
    var totalScore = 0
    for(var i = 0;i < test.Count;i++){
      var w
      if(typeof Choice[i].W!=="undefined")
        w = Choice[i].W
      else{
        w=1
      }
      if(selectedAnswer[i]==Choice[i].R){
        score+=w
      }
      totalScore+=w
    }
    console.log(score/totalScore)
    localStorage.setItem(test.name,JSON.stringify([score/totalScore,selectedAnswer]))
  }

  
  const MathElement = ({content}): ReactElement => {
    return (<span className='inline'>
      {content.split("$$").map((x)=>x[0]=="|"?<TeX>{x.slice(1)}</TeX>:<span className='inline'>{x}</span>)}
    </span>);
    }
  
    function endable(i){
      var answered = selectedAnswer.filter(x => typeof x !== "undefined").length
      
      console.log(answered)
      return (answered===test.Count&&i===test.Count-1)
    }

  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col px-9 pt-6 pb-12 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center self-start text-sm text-black whitespace-nowrap">
          <RevertTab tab={[["Home", ""]]} curr="Test" />
        </div>
        <div className="flex gap-5 justify-between pr-9 mt-12 w-full font-medium max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto text-5xl text-orange-400 max-md:text-4xl">
            <span className="text-black">วิชา</span>{" "}
            <span className="text-orange-400">คณิตศาสตร์</span>
          </div>
          <div className="flex gap-0.5 justify-between px-1.5 py-2.5 text-2xl text-center text-black whitespace-nowrap bg-white rounded-xl border-blue-darker border-solid border-[3px]">
            <img
              loading="lazy"
              srcSet="img/timer.png"
              className="aspect-square w-[30px]"
            />
            <div className="grow my-auto">0:54:37</div>
          </div>
        </div>




        <div className="px-8 pt-6 pb-12 mt-6 text-3xl text-black bg-white rounded-xl max-md:px-5 max-md:max-w-full">
          <MathElement content={`1) ${test.Choice[currentChoiceIndex].Q}`} />

        </div>



        <div className="self-center mt-7 w-full max-w-[1040px] max-md:max-w-full">
          <RadioSel options={C} callback={(x:number)=>setSelectedAnswer(a=>{a[currentChoiceIndex]=x;return a.slice()})} value={selectedAnswer[currentChoiceIndex]}></RadioSel>
        </div>



        <div className="flex gap-5 justify-between self-center mt-11 mb-5 w-full text-2xl font-medium whitespace-nowrap max-w-[1190px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-0 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <button onClick={() => setChoiceIndex(-1)}>
              <div className="justify-center px-9 py-5 my-auto text-center text-blue-darker bg-white rounded-xl border-blue-darker border-solid border-[3px] max-md:px-5">
                ก่อนหน้า
              </div>
            </button>
            <button onClick={() => setChoiceIndex(-1)}>
              <img
                loading="lazy"
                srcSet="img/LessThan.png"
                className="self-stretch my-auto aspect-square w-[60px]"
              />
            </button>
            <div className="h-70 bottom-0">
              <div className="flex gap-2.5 self-stretch px-6 py-2 text-blue-darker bg-white rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                {
                  [...Array(test.Count).keys()].map((i) =>
                    
                    <button onClick={() => setIndex(i)}>
                      <div className={`justify-center py-6 px-6 ${i === currentChoiceIndex ? "text-white bg-blue-darker" : ""} rounded-full aspect-square stroke-[3px] max-md:px-5`}>
                        {i + 1}
                      </div>
                    </button>
                  )
                }
              </div>
            </div>
            <button onClick={() => setChoiceIndex(1)}>
              <img
                loading="lazy"
                srcSet="img/MoreThan.png"
                className="self-stretch my-auto aspect-square w-[60px]"
              />
            </button>
            {endable(currentChoiceIndex)?
            <button onClick={() => calculateResult()}>
              <div className="justify-center self-stretch px-14 py-5 my-auto text-center text-white bg-blue-darker rounded-xl max-md:px-5">
                Finish
              </div>
            </button>:
            <button onClick={() => setChoiceIndex(1)}>
              <div className="justify-center self-stretch px-14 py-5 my-auto text-center text-white bg-blue-darker rounded-xl max-md:px-5">
                ถัดไป
              </div>
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;