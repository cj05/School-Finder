//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import  Radio from '../selectingComponent/Radio'
import { useState } from 'react';

function Card(props) {
  props.image
  function Imagesys(){
  if(typeof props.image !== "undefined") return (<img
            loading="lazy"
            srcSet={props.image}
            className="self-start aspect-square w-[60px]"
          />)
    return (<></>)
  }
  return (
    <div className="flex flex-col px-3.5 pt-12 pb-3 gap-5 mx-auto w-full text-black bg-light-blue rounded-xl max-md:mt-10">
      <div className="flex gap-6">
        <div className="flex text-black bg-white py-2 px-4 rounded-3xl">
          1
        </div>
        <div className="flex text-black bg-white py-2 px-5 rounded-xl">
          Placeholder
        </div>
      </div>
      <Imagesys/>
      <div className="w-full">
        <Radio options={[["1","a"],["2","b"],["3","c"],["4","d"]]}/>
      </div>
    </div>
  );
};

export default Card;