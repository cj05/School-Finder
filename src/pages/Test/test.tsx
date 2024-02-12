import RevertTab from "../../assets/Components/revertTab";
const test = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col pt-6 pr-20 pb-12 pl-9 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center text-sm whitespace-nowrap w-[98px]">
          <RevertTab tab={[["Home",""]]} curr="Test"/>
        </div>
        <div className="self-center mt-5 text-5xl text-black max-md:text-4xl">
          Test
        </div>
        <div className="flex gap-5 justify-between self-center mt-14 max-w-full w-[626px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col flex-1 justify-center items-end py-3.5 pr-3.5 pl-16 bg-white rounded-xl border-2 border-indigo-600 border-solid max-md:pl-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="w-10 aspect-square"
            />
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="self-start aspect-square w-[60px]"
          />
        </div>
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
      </div>
    </div>
  );
}

export default test;