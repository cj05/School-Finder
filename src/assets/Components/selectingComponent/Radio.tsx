//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import {Radio} from "@material-tailwind/react"

function Card(props) {
  const options = props.options
  const cb = props.callback
  const value = props.value
  const b = (x)=>{console.log(value,x[0]);return value==x[0]}

  function gen(){
    return <div className="grid w-full grid-cols-1 gap-2 rounded-xl bg-gray-200 p-2">{options.map((x)=>
    
    <div>
        <input type="radio" name="option" id={x[0]} value={x[0]} className="peer hidden" checked={b(x)} onChange={e => cb(e.target.value)} />
        <label htmlFor={x[0]} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue peer-checked:font-bold peer-checked:text-white">{x[1]}</label>
    </div>

      )}</div>
  }
  return (
    <div className="flex flex-col px-3.5 pt-12 pb-3 mx-auto w-full text-black bg-white rounded-xl max-md:mt-10">
      {gen()}
    </div>
  );
};

export default Card;