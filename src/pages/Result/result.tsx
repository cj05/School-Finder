//import styles from './resultComponent.module.scss';
import Cards from '../../assets/Components/cards'
import searchHandler from '../../model/search.js'
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import config from "../../../config.js"
import { Select, Option } from "@material-tailwind/react";
import Model from '../../model/model.js';
import RevertTab from '../../assets/Components/revertTab'
import textmapper from '../../assets/textmapper.js'
const about = (props) => {
  props
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams
  //var oldSP = ""
  const [Result, setResult] = useState([[1, 1, ""]])
  const [Selection, setSelection] = useState({ "Sel": [[], [], [], [""]], "Test": false })
  const [DummyState, setDummyState] = useState(false)
  const [SkillOption, setSkillOption] = useState([
    "Maths",
    "Science"
  ])
  const [InterestOption, setInterestOption] = useState([
    "Maths",
    "Science",
    "Computer",
    "Psycology"
  ])
  const [PersonalityOption, setPersonalityOption] = useState([
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP"
  ])


  function lookup() {
    try {
      var parameter = searchParams.get('name');
      if (parameter === null) parameter = "[[0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,0,0]]"
      var result = localStorage.getItem(JSON.stringify(parameter));
      if (typeof result === "undefined" || result === null) {
        searchHandler.search(JSON.parse(parameter), (res) => {
          setResult(res)
          console.log(res)
          console.log(Result)
          localStorage.setItem(JSON.stringify(parameter), JSON.stringify(res));
        })
      } else {
        setResult(JSON.parse(result))
      }
    } catch (e) {
      setResult([[1, 1, ""]])
      console.error("Error has happened")
      console.error(e)
    }


  }
  var CD
  
  useEffect(() => {
    const state = searchParams.get("d");
    Model.LoadDB(`${config.Path}model`).then(() => {
      CD = Model.getCatagoryData()
      console.log(CD)
      setSkillOption(CD[0])
      setInterestOption(CD[1])
      //refreshPage()
    })
    if (state !== null) {
      setSelection(JSON.parse(state))
      console.log(state)
    }

    lookup()
  }, []);

  const result = () => {
    if (JSON.stringify(Result) !== "[[1,1,\"\"]]") {
      return Result.map((x) => <Cards
        name={x[2] + " " + Math.round(Number(Math.max(Number(x[0]) - Number(x[1]), 0)) * 100).toString() + " -> " + Math.round(Number(Math.min(Number(x[0]) + Number(x[1]), 1)) * 100).toString() + "%"}
        to={`${config.Path}view?uni=${String(x[2]).split("/")[0]}&fac=${String(x[2]).split("/")[1]}`}
      />)
    } else {
      return "Please Wait"
    }
  }

  function applySearch() {
    var parameter = generateParameters()
    routeChange("result?name=" + JSON.stringify(parameter) +"&d="+ JSON.stringify(Selection))
    window.location.reload();
  }
  const generateParameters = () => {
    console.log(Selection)
    var SkillArr = Selection.Sel[0]
    var InterestArr = Selection.Sel[1]
    var MBTIArr = Selection.Sel[2]
    var parameter = [[0], [0], [0]]
    for (var i = 1; i < SkillOption.length; i++) parameter[0].push(0)
    for (var i = 1; i < InterestOption.length; i++) parameter[1].push(0)
    for (var i = 1; i < 4; i++) parameter[2].push(0)

    MBTIArr.forEach((x) => {
      if (x[0] === "I") parameter[2][0]++
      else parameter[2][0]--
      if (x[1] === "N") parameter[2][1]++
      else parameter[2][1]--
      if (x[2] === "T") parameter[2][2]++
      else parameter[2][2]--
      if (x[3] === "P") parameter[2][3]++
      else parameter[2][3]--
    })

    if(MBTIArr.length>0){
      parameter[2][0] /= MBTIArr.length
      parameter[2][1] /= MBTIArr.length
      parameter[2][2] /= MBTIArr.length
      parameter[2][3] /= MBTIArr.length
    } 

    var factor = 1
    SkillArr.forEach((x) => { parameter[0][SkillOption.indexOf(x)] += factor; factor /= 1.2 })
    factor = 1
    InterestArr.forEach((x) => { parameter[1][InterestOption.indexOf(x)] += factor; factor /= 1.2 })
    //parameter[0][SkillOption.indexOf(Skill)] = 1
    //if(typeof parameter === "undefined") parameter = [[1,0.7,-0.3,0.6],[0.1,-0.7,0.5,0.9,-0.6,-0.9,-0.3,0,0.1,-0.7,0.5,0.9,0.6,0.9,0.3,0]]
    return parameter

  }
  let navigate = useNavigate();
  const routeChange = (path) => {
    path = config.Path + path
    navigate(path);
  }

  const Dropdown = (props) => {
    const { option, setstate, value } = props
    return (<Select variant="outlined" value={value} className="truncate w-full max-w-200 rounded-2xl bg-white h-10 text-lg text-center content-center"
      onChange={e => { console.log(e); if (typeof e !== "undefined") setstate(e) }} >
      {option.map((a) => <Option value={a}>{textmapper(a)}</Option>)}
    </Select>)
  }



  return (
    <div className="flex flex-col pb-12 bg-white">
      <div className="flex flex-col items-start pt-6 pr-20 pb-12 pl-9 w-full bg-light-blue max-md:px-5 max-md:max-w-full">
        <RevertTab tab={[["Home",""]]} curr="Result"/>
        <div className="self-end mt-24 w-36 h-20 bg-zinc-300 max-md:mt-10" />
        <div className="mt-14 mb-64 ml-3 max-w-full w-max max-md:my-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="h-screen sticky top-40 flex flex-col w-[30%] h-100 max-md:ml-0 max-md:w-full ">
              <div className="relative h-full pt-12 pb-3.5 pl-10 w-full bg-white rounded-xl max-md:mt-10">
                <div className="flex flex-col p-2 gap-2 w-6/12 max-md:gap-0 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col p-2 gap-2 w-6/12 max-md:gap-0 max-md:ml-0 max-md:w-full ">
                    <div className="bg-blue rounded-lg px-10 py-0 text-xl font-medium mx-3">
                      Skill
                    </div>
                    {[...Array(Math.min(SkillOption.length,Selection.Sel[0].length + 1)).keys()].map((i) =>
                      <>
                         <Dropdown option={SkillOption.filter((element) => !Selection.Sel[0].includes(element)||Selection.Sel[0][i]==element).concat(["Unselect"])} value={Selection.Sel[0][i]} setstate={(x) => { setSelection((a) => { setDummyState((x) => !x);if(x === "Unselect") { a.Sel[0].splice(i,1)} else { a.Sel[0][i] = x;  }return a}) }} />
                      </>
                    )}
                  </div>
                  <div className="flex flex-col p-2 gap-2 w-6/12 max-md:gap-0 max-md:ml-0 max-md:w-full ">
                    {[...Array(Math.min(InterestOption.length,Selection.Sel[1].length + 1)).keys()].map((i) =>
                      <>
                         <Dropdown option={InterestOption.filter((element) => !Selection.Sel[1].includes(element)||Selection.Sel[1][i]==element).concat(["Unselect"])} value={Selection.Sel[1][i]} setstate={(x) => { setSelection((a) => { setDummyState((x) => !x);if(x === "Unselect") {a.Sel[1].splice(i,1)} else { a.Sel[1][i] = x;  }return a}) }} />
                      </>
                    )}
                  </div>
                  <div className="flex flex-col p-2 gap-2 w-6/12 max-md:gap-0 max-md:ml-0 max-md:w-full ">
                    {[...Array(Math.min(PersonalityOption.length,Selection.Sel[2].length + 1)).keys()].map((i) =>
                      <>
                         <Dropdown option={PersonalityOption.filter((element) => !Selection.Sel[2].includes(element)||Selection.Sel[2][i]==element).concat(["Unselect"])} value={Selection.Sel[2][i]} setstate={(x) => { setSelection((a) => { setDummyState((x) => !x);if(x === "Unselect") { a.Sel[2].splice(i,1)} else { a.Sel[2][i] = x;  }return a}) }} />
                      </>
                    )}
                  </div>
                </div>
                <div className="relative bottom-0 mb-0 p-2 flex gap-5 flex-col max-md:gap-0">
                  <div className="flex gap-2 ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex-col self-center border-2 border-blue grow justify-center px-4 py-3 w-full text-base text-blue whitespace-nowrap rounded-2xl bg-zinc-300 max-md:px-5 max-md:mt-10 h-15">
                      Cancel
                    </div>
                    <button onClick={() => applySearch()} className="flex-col grow justify-center px-4 py-3 w-full text-base text-white whitespace-nowrap rounded-2xl bg-blue max-md:px-5 max-md:mt-10 h-15">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 ml-5">
              {result()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;