//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function CardO(props) {
  return (
    <div className="flex flex-col px-3.5 pt-12 pb-3 mx-auto w-full text-black bg-white rounded-xl max-md:mt-10">
      <Link style={{textDecoration: 'none'}} to={props.to}>
        <div className="mt-28 text-3xl max-md:mt-10 text-black">Faculty</div>
        <div className="mt-1 text-3xl text-black">
          {props.name}
        </div>
        <div className="flex gap-5 justify-between items-start mt-14 text-base whitespace-nowrap max-md:mt-10 text-black">
          <div className="justify-center px-7 py-3 rounded-md bg-yellow max-md:px-5">
            View
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-square w-[35px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default CardO;