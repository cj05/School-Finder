export default function MyComponent(props) {
  return (
    <div className="flex flex-col px-1.5 pt-12 pb-3 mt-24 mb-96 ml-20 max-w-full text-black whitespace-nowrap bg-white rounded-xl w-[180px] max-md:my-10 max-md:ml-2.5">
      <div className="mt-20 text-base max-md:mt-10">วิชา......</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/353536169426535d72651b6c904f2b8c8371f2eabd2685a8b565113baad6c7ae?"
        className="self-center mt-2 w-full aspect-[100] stroke-[1px] stroke-black"
      />
      <div className="flex gap-5 justify-between mt-1.5">
        <div className="flex flex-col">
          <div className="text-xs">จำนวน...ข้อ</div>
          <div className="justify-center px-5 py-2 mt-3 text-sm bg-orange-400 rounded-md aspect-[2.6]">
            start
          </div>
        </div>
        <div className="self-start text-xs">เวลา......</div>
      </div>
    </div>
  );
}


