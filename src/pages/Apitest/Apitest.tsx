import Card from '../../assets/Components/cards';
import styles from './ApitestComponent.module.scss';
import { useState, useEffect } from 'react';



const Apitest = () => {

  const [posts, setPosts] = useState({});
  const [N, setN] = useState({});
  

    var jsonData = {
      "Data":{}
    }
  
    function handleClick() {
      jsonData["Data"] = N
      // Send data to the backend via POST
      fetch('http://localhost/api/lookup', {  // Enter your IP address here
  
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' } ,
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      })
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         setPosts(data);
      })
      
    }

    

  return (
    <>
      <label>
          Name:
          <input type="text" onChange={e => setN(JSON.parse(e.target.value) )} style={{
        textAlign: 'center',
        width: '700px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}/>
        </label>
      <div onClick={handleClick} style={{
        textAlign: 'center',
        width: '700px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        Send data to backend

        Last Resposes:
        {JSON.stringify(posts)}
      </div>
    </>
  );
};

export default Apitest;