import { useEffect, useState } from 'react';
import styles from './aboutmeComponent.module.scss';
import { useSearchParams } from 'react-router-dom';
import config from "../../../config.js"
const about = () => {
  //I KNOW this is XSS vunerable code but I DONT HAVE TIME ANYMORE TO DEAL WITH IT
  const [searchParams, setSearchParams] = useSearchParams();
  const [Uni, setUni] = useState({})

  useEffect(()=>{
    fetch(`${config.Path}archive/${searchParams.get("uni")}/${searchParams.get("fac")}.json`)
                .then(response => response.text())
                .then(text => setUni(JSON.parse(text)) )
  },[])

  

  return (
    <div className="flex flex-col text-white bg-white">
      <div className="flex justify-center items-center px-16 py-8 w-full text-5xl whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col max-w-full w-[250px] max-md:text-4xl">
          <div className="shrink-0 bg-white h-[250px]" />
          <div className="mt-11 max-md:mt-10 max-md:text-4xl">
            {`มหาวิทยาลัย${searchParams.get("uni")} คณะ ${searchParams.get("fac")}`}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-20 py-12 w-full bg-blue-darker max-md:px-5 max-md:max-w-full">
        <div className="mt-3 text-base max-md:max-w-full">
          <div className='text-2xl'>
            ตำอธิบาย
          </div>
          {Uni["คำอธิบายคณะ"]}
          <div className='text-2xl'>
            สาขาภาควิชา
          </div>
          {Uni["สาขา/ภาควิชา"]}
          <div className='text-2xl'>
            หลักสูตร
          </div>
          {Uni["หลักสูตร"]}
          <div className='text-2xl'>
            ค่าเทอม
          </div>
          {Uni["ค่าเทอม"]}
          <div className='text-2xl'>
            คุณสมบัติผู้สมัคร
          </div>
          {Uni["การรับสมัครและคุณสมบัตรผู้สมัคร"]/*neat a typo in database......*/}
          <br />
          <div className='text-2xl'>
            ข้อมูลติดต่อมหาลัย
          </div>
          ตำแหน่งที่ตั้ง: {Uni["ตำแหน่งที่ตั้ง"]} <br />
          ช่องทางการติดต่อ: {Uni["ช่องทางการติดต่อ"]} <br />
          <div className='text-2xl'>
            ข้อมูลการรับสมัคร
          </div>
          TCAS รอบ 1 Portfolio: {Uni["รอบ1 Portfolio"]} <br />
          TCAS รอบ 2 Quota: {Uni["รอบ 2 Quota"]} <br />
          TCAS รอบ 3 Admission: {Uni["รอบ 3 Admission "]} <br />
          TCAS รอบ 4 Direct Admission: {Uni["รอบ 4 Direct admission "]} <br />
          <div className='text-2xl'>
            อาชีพที่ต่อยอดได้
          </div>
          {Uni["อาชีพ"]} <br />
        </div>
        <div className="mt-14 text-3xl font-medium max-md:mt-10 max-md:max-w-full">
          Program
        </div>
        <div className="mt-9 mb-48 w-40 rounded-md bg-zinc-300 h-[180px] max-md:mb-10" />
      </div>
    </div>
  );
}

export default about;