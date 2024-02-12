import styles from './aboutmeComponent.module.scss';
import MathJax from 'react-mathjax2'
import RevertTab from '../../assets/Components/revertTab';
import TestChoice from '../../assets/Components/testChoiceForm'
const about = () => {
  var content="1) $$tan(arccos(5/13)+arcsin(3/5))$$"

  function MathElement(props){
    return <MathJax.Context
    input='ascii'
    onLoad={() => console.log("Loaded MathJax script!")}
    onError={(MathJax, error) => {
      console.warn(error);
      console.log("Encountered a MathJax error, re-attempting a typeset!");
      MathJax.Hub.Queue(
        MathJax.Hub.Typeset()
      );
    }}
    script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
    options={{
      asciimath2jax: {
        useMathMLspacing: true,
        delimiters: [["$$", "$$"]],
        preview: "none",
      }
    }}
  >
    <MathJax.Text text={props.content} />
  </MathJax.Context>
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
          <MathElement content={content}/>
        
        </div>
        <div className="self-center mt-7 w-full max-w-[1040px] max-md:max-w-full">
          <TestChoice options={["9/8","-63/16","-9/8","63/16"]}></TestChoice>
        </div>
        <div className="flex gap-5 justify-between self-center mt-11 mb-5 w-full text-2xl font-medium whitespace-nowrap max-w-[1190px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="justify-center px-9 py-5 my-auto text-center text-blue-darker bg-white rounded-xl border-blue-darker border-solid border-[3px] max-md:px-5">
            ก่อนหน้า
          </div>
          <div className="flex gap-0 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="img/LessThan.png"
              className="self-stretch my-auto aspect-square w-[60px]"
            />
            <div className="h-70 bottom-0">
              <div className="flex gap-2.5 self-stretch px-6 py-2 text-blue-darker bg-white rounded-[30px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="justify-center py-6 px-6 text-white bg-blue-darker rounded-full aspect-square stroke-[3px] max-md:px-5">
                  1
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  2
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  3
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  4
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  5
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  6
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  7
                </div>
                <div className="justify-center px-6 py-6 rounded-full aspect-square stroke-[3px] max-md:px-5">
                  8
                </div>
              </div>
            </div>

            <img
              loading="lazy"
              srcSet="img/MoreThan.png"
              className="self-stretch my-auto aspect-square w-[60px]"
            />
            <div className="justify-center self-stretch px-14 py-5 my-auto text-center text-white bg-blue-darker rounded-xl max-md:px-5">
              ถัดไป
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;