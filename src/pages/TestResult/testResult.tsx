import { useEffect, useState } from 'react';
import styles from './aboutmeComponent.module.scss';
import {useSearchParams} from 'react-router-dom'
const testresult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState("");
  const [Res, setData] = useState({total:0,score:0,time:1000,ts:Date.now()});
  useEffect(()=>{
    const subject = searchParams.get("q")
    var data
    if(subject !== null){
      data = localStorage.getItem(subject)
    }
    if(data !== null && subject !== null){
      data = JSON.parse(data)
      setData({total:data[1].length,score:data[0],time:data[2],ts:data[3]})
      console.log(Res)
      setTitle(subject)
    }else{
      setData({total:0,score:0,time:1000,ts:Date.now()})
      setTitle("Error")
    }
     
  },[])
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex justify-center items-center px-16 py-12 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center mt-14 mb-1.5 w-full max-w-[1100px] max-md:mt-10 max-md:max-w-full">
          <div className="text-5xl font-medium text-center text-indigo-600 whitespace-nowrap max-md:text-4xl">
            Test Result
          </div>
          <div className="flex flex-col items-center self-stretch px-16 pt-4 pb-12 mt-9 bg-white rounded-xl border-indigo-600 border-solid border-[3px] max-md:px-5 max-md:max-w-full">
            <div className="mb-6 max-w-full w-[848px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[73%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start text-3xl whitespace-nowrap max-md:mt-5 max-md:max-w-full">
                    <div className="self-end text-6xl font-medium text-center text-orange-400 max-md:text-4xl">
                      {Res.score*Res.total}/{Res.total} ({100*Res.score}%)
                    </div>
                    <div className="flex gap-1 mt-12 max-md:mt-10">
                      <div className="text-purple-500">วิชา :</div>
                      <div className="flex-auto text-black">{title}</div>
                    </div>
                    <div className="flex gap-1 mt-10 max-md:mt-10">
                      <div className="grow text-purple-500">จำนวน:</div>
                      <div className="grow text-black">{Res.total} ข้อ</div>
                    </div>
                    <div className="flex gap-1.5 mt-9">
                      <div className="grow text-purple-500">เวลาที่ใช้:</div>
                      <div className="grow text-black">{Math.floor(Res.time/60000%60)} นาที {Math.floor(Res.time/1000%60)} วินาที </div>
                    </div>
                    <div className="flex gap-1 mt-9">
                      <div className="grow text-purple-500">วันที่สอบ:</div>
                      <div className="grow text-black">{new Date(Res.ts).toLocaleDateString()}</div>
                    </div>
                    <div className="flex gap-1.5 mt-12 max-md:mt-10">
                      <div className="grow text-purple-500">เวลา:</div>
                      <div className="grow text-black">{new Date(Res.ts).toLocaleTimeString()} </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-32 text-3xl whitespace-nowrap max-md:mt-10">
                    <div className="flex gap-0 justify-between">
                      <div className="grow text-purple-500">Part:</div>
                      <div className="grow text-black">xx/xx</div>
                    </div>
                    <div className="flex gap-0 justify-between mt-8">
                      <div className="grow text-purple-500">Part:</div>
                      <div className="flex-auto text-black">xx/xx</div>
                    </div>
                    <div className="flex gap-0 justify-between mt-8">
                      <div className="grow text-purple-500">Part:</div>
                      <div className="flex-auto text-black">xx/xx</div>
                    </div>
                    <div className="flex gap-0 justify-between mt-8">
                      <div className="grow text-purple-500">Part:</div>
                      <div className="flex-auto text-black">xx/xx</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center px-8 py-6 mt-5 text-4xl font-medium text-center text-white whitespace-nowrap bg-orange-400 rounded-xl max-md:px-5">
            See The Answer
          </div>
          <div className="justify-center px-11 py-6 mt-12 text-2xl font-medium text-center text-indigo-600 whitespace-nowrap bg-white rounded-xl border-indigo-600 border-solid border-[3px] max-md:px-5 max-md:mt-10">
            Home
          </div>
        </div>
      </div>
    </div>
  );
};

export default testresult;