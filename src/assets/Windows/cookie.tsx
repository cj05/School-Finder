import React from "react";

export default function MyComponent(props) {
    const [cookie,setCookie] = React.useState(true);
    function ChooseCookie(Accept){
        if(Accept){
            setCookie(true)
        }else{
            setCookie(true)
        }
    }
ChooseCookie
  return (
    <div className="flex gap-5 justify-between items-start pt-4 pr-16 pb-6 pl-7 text-justify bg-white max-md:flex-wrap max-md:px-5">
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="text-4xl font-semibold text-indigo-600 max-md:max-w-full">
          เว็ปไซต์นี้มีการใช้คุกกี้
        </div>
        <div className="mt-5 text-2xl text-black max-md:max-w-full">
          เว็บไซต์นี้มีการใช้งานคุกกี้เว็บไซต์ของเราใช้งานคุกกี้เพื่อช่วย
          <br />
          เพิ่มประสบการณ์การใช้งานเว็บไซต์ให้สามารถใช้งานได้ดียิ่งขึ้น
          คุณสามารถเลือกที่จะยอมรับหรือปฏิเสธการใช้งานคุกกี้ได้ง่ายๆ <br />
          โดยการดูรายละเอียดเพิ่มเติมที่ “การตั้งค่าคุกกี้”
        </div>
      </div>
      <div className="flex flex-col self-end mt-7 text-2xl text-white whitespace-nowrap">
        <div className="justify-center items-center px-16 py-3.5 rounded-xl bg-zinc-300 max-md:px-5">
          Setting cookies
        </div>
        <div className="justify-center items-center px-16 py-3.5 mt-9 bg-indigo-600 rounded-xl max-md:px-5">
          Accept all cookies
        </div>
        <div className="self-center mt-8 text-base text-black underline">
          learn more
        </div>
      </div>
    </div>
  );
}


