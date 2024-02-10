//import styles from './resultComponent.module.scss';
import Cards from '../../assets/Components/cards'
import searchHandler from '../../model/search.js'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const about = (props) => {
  props
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams
  //var oldSP = ""
  const [Result,setResult] = useState([[1,1,""]])
  function lookup(){
    try{
      const parameter = searchParams.get('name');
      if(parameter === null) return
      var result = localStorage.getItem(JSON.stringify(parameter));
      if(typeof result==="undefined"||result===null){
        searchHandler.search(JSON.parse(parameter),(res)=>{
          setResult(res)
          console.log(res)
          console.log(Result)
          localStorage.setItem(JSON.stringify(parameter), JSON.stringify(res));
        })
      }else{
        setResult(JSON.parse(result))
      }
    }catch(e){
      setResult([[1,1,""]])
      console.error("Error has happened")
      console.error(e)
    }
    
    
  }
  useEffect(() => {
    lookup()
  }, []);
  
  const result = ()=>{
    if(JSON.stringify(Result) !== "[[1,1,\"\"]]"){
      return Result.map((x)=><Cards name={x[2]+" "+Math.round(Number(x[0])*100).toString()+"%"}/>)
    }else{
      return "Please Wait"
    }
  }
  

  return (
    <div className="flex flex-col pb-12 bg-white">
      <div className="flex flex-col items-start pt-6 pr-20 pb-12 pl-9 w-full bg-blue-darker max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2.5 text-sm text-black whitespace-nowrap">
          <div className="self-start mt-2">Home</div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[1.05] w-[19px]"
          />
          <div className="grow my-auto">Match result</div>
        </div>
        <div className="self-end mt-24 w-36 h-20 bg-zinc-300 max-md:mt-10" />
        <div className="mt-14 mb-64 ml-3 max-w-full w-max max-md:my-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="h-screen shrink sticky top-40 flex flex-col w-[30%] h-[80%] max-md:ml-0 max-md:w-full ">
              <div className="grow pt-12 pb-3.5 pl-10 w-full bg-white rounded-xl max-md:mt-10">
                <div className="flex flex-col p-2 gap-2 w-6/12 max-md:gap-0 max-md:ml-0 max-md:w-full bg-blue">
                  
                </div>
                <div className="p-2 flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex gap-2 ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex-col self-center border-2 border-blue grow justify-center px-4 py-3 w-full text-base text-blue whitespace-nowrap rounded-2xl bg-zinc-300 max-md:px-5 max-md:mt-10 h-15">
                      Cancel
                    </div>
                    <div className="flex-col grow justify-center px-4 py-3 w-full text-base text-white whitespace-nowrap rounded-2xl bg-blue max-md:px-5 max-md:mt-10 h-15">
                      Submit
                    </div>
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