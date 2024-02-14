import RevertTab from "../../assets/Components/revertTab";
const test = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col pt-6 pr-20 pb-12 pl-9 w-full bg-indigo-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 items-center text-sm whitespace-nowrap w-[98px]">
          <RevertTab tab={[["Home", ""]]} curr="Test" />
        </div>
        <div className="self-center mt-5 text-5xl text-black max-md:text-4xl">
          Test
        </div>
        <div className="flex gap-5 justify-between self-center mt-14 max-w-full w-[626px] max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col flex-1 justify-center items-end py-3.5 pr-3.5 pl-16 bg-white rounded-xl border-2 border-indigo-600 border-solid max-md:pl-5 max-md:max-w-full">
            <img loading="lazy" srcSet="img\DropArrow.png" className="w-10 aspect-square" />
          </div>
          <img
            loading="lazy"
            srcSet="img\search.png"
            className="self-start aspect-square w-[60px]"
          />
        </div>
        <div className="grid grid-col-4 gap-[25px] ">
          <div className="w-[25%] max-w-[300px] p-2.5 bg-white rounded-[10px] flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="flex-col justify-start items-center gap-2 flex">
              <div className="w-[260px] text-indigo-600 text-2xl font-normal font-['Roboto']">
                วิชา คณิตศาสตร์
              </div>
              <div className="justify-start items-start gap-[60px] inline-flex">
                <div className="px-2.5 justify-center items-center gap-[5px] flex">
                  <div className="text-black text-[15px] font-normal font-['Roboto']">
                    จำนวน 5 ข้อ
                  </div>
                </div>
                <div className="px-2.5 justify-center items-center gap-[5px] flex">
                  <img
                    className="w-[15px] h-[15px]"
                    src="https://via.placeholder.com/15x15"
                  />
                  <div className="text-black text-[15px] font-normal font-['Roboto']">
                    เวลา 10 นาที
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 py-2 bg-orange-400 rounded-[10px] flex-col justify-end items-center gap-[30px] flex">
              <button className="text-white text-base font-normal font-['Roboto']">
                Start
              </button> 
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default test;

/*9<img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/353536169426535d72651b6c904f2b8c8371f2eabd2685a8b565113baad6c7ae?"
            className="self-center mt-2 w-full aspect-[100] stroke-[1px] stroke-black"
          />*/
