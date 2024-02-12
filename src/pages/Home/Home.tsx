import Model from '../../model/model.js';
//import * as React from "react";
import styles from './HomeComponent.module.scss';
import Widget from '../../assets/Components/widget.tsx'
import Widget2 from '../../assets/Components/widget2.tsx'
import { Select, Option } from "@material-tailwind/react";
import  { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import config from "../../../config.js"
//import searchHandler from '../../model/search.js'
import textmapper from '../../assets/textmapper.js'
const Home = () => {
  
  
  const [SkillOption,setSkillOption] = useState([
    "Maths",
    "Science"
  ])
  const [InterestOption,setInterestOption] = useState([
    "Maths",
    "Science",
    "Computer",
    "Psycology"
  ])
  const [PersonalityOption,setPersonalityOption] = useState([
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


  setPersonalityOption
  var CD
  
  
  const [Skill,setSkill] = useState(SkillOption[0])
  const [Interest,setInterest] = useState(InterestOption[0])
  const [Personality,setPersonality] = useState(PersonalityOption[0])
  let navigate = useNavigate();
  const routeChange = (path) => {
      path = config.Path+path
      navigate(path);
      
  }


  Personality

  const lookupRedirect = ()=>{
    var parameter = generateParameters()
    
    routeChange("result?name="+JSON.stringify(parameter)+"&d="+ JSON.stringify({"Sel":[[Skill],[Interest],[Personality]],"Test":false}))
  }
  const generateParameters = ()=>{
    var MBTIArr = [Personality]
    var parameter = [[0],[0],[0]]
    for(var i=1;i<SkillOption.length;i++) parameter[0].push(0)
    for(var i=1;i<InterestOption.length;i++) parameter[1].push(0)
    for(var i=1;i<4;i++) parameter[2].push(0)
    
    MBTIArr.forEach((x)=>{
      if(x[0]==="I") parameter[2][0]++
      else parameter[2][0]--
      if(x[1]==="N") parameter[2][1]++
      else parameter[2][1]--
      if(x[2]==="T") parameter[2][2]++
      else parameter[2][2]--
      if(x[3]==="P") parameter[2][3]++
      else parameter[2][3]--
    })

    if(MBTIArr.length>0){
      parameter[2][0] /= MBTIArr.length
      parameter[2][1] /= MBTIArr.length
      parameter[2][2] /= MBTIArr.length
      parameter[2][3] /= MBTIArr.length
    } 

    console.log(Skill,Interest)
    parameter[0][SkillOption.indexOf(Skill)] = 1
    parameter[1][InterestOption.indexOf(Interest)] = 1
    //parameter[0][SkillOption.indexOf(Skill)] = 1
    //if(typeof parameter === "undefined") parameter = [[1,0.7,-0.3,0.6],[0.1,-0.7,0.5,0.9,-0.6,-0.9,-0.3,0,0.1,-0.7,0.5,0.9,0.6,0.9,0.3,0]]
    return parameter
    
  }
  useEffect(() => {
    Model.LoadDB(`${config.Path}model`).then(()=>{
      CD = Model.getCatagoryData()
      console.log(CD)
      setSkillOption(CD[0])
      setInterestOption(CD[1])
      //refreshPage()
    })
  }, []);


  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col w-full bg-grey max-md:max-w-full bg-[url('https://cj05.github.io/School-Finder/img/home.png')]">
        <div className="flex flex-col px-20 mt-14 text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mr-4 text-6xl md:text-9xl max-md:mr-2.5 max-md:max-w-full bg-gradient-to-r from-white to-blue inline-block text-transparent bg-clip-text">
            Scholar Plan
          </div>
          <div className="ml-20 text-base whitespace-nowrap">
            Education platfrom
          </div>
        </div>
        <div className="flex flex-no-wrap flex-col px-20 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="mr-4 text-xl text-white max-md:mr-2.5 max-md:max-w-full">
          แพลตฟอร์มด้านการศึกษาของประเทศไทย ที่สร้างขึ้นมาเพื่อรองรับปัญหาด้านการศึกษาสำหรับผู้ที่ต้องการเข้าศึกษาต่อในระดับอุดมศึกษา เป็นแหล่งรวมข้อมูลด้านการศึกษาต่อในมหาวิทยาลัย มีข้อมูลพื้นฐานและข้อมูลการรับสมัครของแต่ละมหาวิทยาลัยที่เป็นประโยชน์ต่อผู้ใช้งาน เพื่อเป็นตัวช่วยในการประกอบการตัดสินใจในการเข้าศึกษาต่อของผู้ใช้งาน​

โดยผู้ใช้งานสามารถค้นหารายชื่อมหาวิทยาลัย คณะ และสาขาต่าง ๆ นอกจากนี้ผู้ใช้งานยังสามารถค้นหาความถนัดผ่านการทำข้อสอบเข้ามหาวิทยาลัยฉบับจริง และค้นหาความชอบผ่านการทำแบบทดสอบบุคลิกภาพ ตามทฤษฎีทางจิตวิทยา ทั้งนี้ระบบจะแสดงผลลัพธ์เป็นสาขาและคณะของมหาวิทยาลัยต่าง ๆ ที่ตรงกับความถนัดและความชอบของผู้ใช้งาน
          </div>{" "}
          <div className="flex flex-wrap  sm:flex-no-wrap gap-5 justify-start pr-2 mt-28 mr-4  max-md:mt-10 max-md:mr-2.5 max-md:max-w-full content-normal">
            <div className="w-25 outline-none" >
              <Select variant="outlined" className="overflow-hidden truncate w-full max-w-200 rounded-2xl bg-white h-10 text-xl text-center content-center" onChange={e=>{console.log(e);if(typeof e !== "undefined")setSkill(e)}} >
                {SkillOption.map((a)=><Option value={a}>{textmapper(a)}</Option>)}
              </Select>
            </div>
            <div className="w-25 outline-none">
              <Select variant="outlined" className="overflow-hidden truncate w-full max-w-200 rounded-2xl bg-white h-10 text-xl text-center content-center" onChange={e=>{console.log(e);if(typeof e !== "undefined")setInterest(e)}} >
                {InterestOption.map((a)=><Option value={a}>{textmapper(a)}</Option>)}
              </Select>
            </div>
            <div className="w-25 outline-none ">
              <Select variant="outlined" className="overflow-hidden truncate w-full max-w-200 rounded-2xl bg-white h-10 text-xl text-center content-center" onChange={e=>{console.log(e);if(typeof e !== "undefined")setPersonality(e)}} >
                {PersonalityOption.map((a)=><Option value={a}>{textmapper(a)}</Option>)}
              </Select>
            </div>
          </div>{" "}
          
          <div className="relative flex-col justify-center self-center px-14 py-5 mt-9 text-xl text-white whitespace-nowrap aspect-[3.04] rounded-2xl max-md:px-5">
            <button onClick={()=>lookupRedirect()} className="py-6 px-24 bg-blue self-center rounded-2xl text-3xl">Search</button>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="text-5xl font-extrabold tracking-wide text-black leading-[64.8px] max-md:max-w-full max-md:text-4xl">
          What You Can Do?
        </div>{" "}
        <div className="mt-16 mb-6 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap sm:flex-no-wrap gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex grow basis-96 flex-col w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget2 title="Search University It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout." buttonText = "more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget2 title="Programs It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout." buttonText = "more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget2 title="MBTI It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout." buttonText = "more"/>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex z-10 flex-col px-20 py-12 -mt-3.5 w-full bg-light-blue max-md:px-5 max-md:max-w-full">
        <div className="self-start text-6xl text-black max-md:max-w-full max-md:text-4xl">
          Lorem Ipsum
        </div>{" "}
        <div className="self-center mt-8 w-full max-w-[1500px] max-md:max-w-full">
          <div className="flex flex-wrap-reverse gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>
          </div>
        </div>{" "}
        <div className="self-start mt-12 text-6xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Lorem Ipsum
        </div>{" "}
        <div className="self-center mt-8 mb-3 w-full max-w-[1170px] max-md:max-w-full">
          <div className="flex flex-wrap-reverse gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>{" "}
            <div className="flex grow basis-96 flex-col ml-5 w-[30%] min-w[30%] max-md:ml-0 max-md:w-full">
              <Widget title="Lorem Ipsum" buttonText="more"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;