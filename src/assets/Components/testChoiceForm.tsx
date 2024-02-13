import { useState, useEffect, memo, ReactElement  } from 'react'
import MathJax from 'react-mathjax2'
import { Radio } from "@material-tailwind/react";
 
export default function b(prop) {
    const MathElementComponent = ({content}): ReactElement => {
        return (<MathJax.Context input='ascii'>
            <MathJax.Text text={content} />
        </MathJax.Context>)
    }
    const MathElement = memo(MathElementComponent)

    useEffect(()=>{
        document.getElementsByName(prop.id).forEach((x)=>x.setAttribute( "checked" , String(x.id==prop.value)))
    },[prop.id])
    return (
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl text-black whitespace-nowrap max-md:mt-10">
                    <div className="justify-center items-center bg-white boundary-2 rounded-xl max-md:px-5">
                        <input type="radio" id="1" name={prop.id} value="1" className="peer hidden" onChange={(x) => prop.onChange(x.target.value)} />
                        <label htmlFor="1" className="block cursor-pointer select-none rounded-xl px-16 py-8 text-center peer-checked:bg-blue peer-checked:font-bold peer-checked:text-white"> <MathElement content={`1 )  $$${prop.options[0]}$$`} /></label>
                    </div>
                    <div className="justify-center items-center mt-2.5 bg-white boundary-2 rounded-xl max-md:px-5">
                        <input type="radio" id="2" name={prop.id} value="2" className="peer hidden" onChange={(x) => prop.onChange(x.target.value)} />
                        <label htmlFor="2" className="block cursor-pointer select-none rounded-xl px-16 py-8 text-center peer-checked:bg-blue peer-checked:font-bold peer-checked:text-white"> <MathElement content={`2 )  $$${prop.options[1]}$$`} /></label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-2xl text-black whitespace-nowrap max-md:mt-10">
                    <div className="justify-center items-center bg-white boundary-2 rounded-xl max-md:px-5">
                        <input type="radio" id="3" name={prop.id} value="3" className="peer hidden" onChange={(x) => prop.onChange(x.target.value)} />
                        <label htmlFor="3" className="block cursor-pointer select-none rounded-xl px-16 py-8 text-center peer-checked:bg-blue peer-checked:font-bold peer-checked:text-white"> <MathElement content={`3 )  $$${prop.options[2]}$$`} /></label>
                    </div>
                    <div className="justify-center items-center mt-2.5 bg-white boundary-2 rounded-xl max-md:px-5">
                        <input type="radio" id="4" name={prop.id} value="4" className="peer hidden" onChange={(x) => prop.onChange(x.target.value)} />
                        <label htmlFor="4" className="block cursor-pointer select-none rounded-xl px-16 py-8 text-center peer-checked:bg-blue peer-checked:font-bold peer-checked:text-white"> <MathElement content={`4 )  $$${prop.options[3]}$$`} /></label>
                    </div>
                </div>
            </div>
        </div>)

}