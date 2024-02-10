//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';

function CardO(props) {
  return (
    <div className="flex flex-col px-3.5 pt-12 pb-3 mx-auto w-full text-black bg-white rounded-xl max-md:mt-10">
                <div className="mt-28 text-3xl max-md:mt-10">Faculty</div>
                <div className="mt-1 text-3xl">
                  {props.name}
                </div>
                <div className="flex gap-5 justify-between items-start mt-14 text-base whitespace-nowrap max-md:mt-10">
                  <div className="justify-center px-7 py-3 rounded-md bg-zinc-300 max-md:px-5">
                    View
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square w-[35px]"
                  />
                </div>
              </div>
  );
};

export default CardO;