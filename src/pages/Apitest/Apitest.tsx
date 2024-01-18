import Card from '../../assets/Components/cards';
import styles from './ApitestComponent.module.scss';
import { useState, useEffect } from 'react';



const Apitest = () => {

  const [posts, setPosts] = useState({});
  const [N, setN] = useState(0);

    var jsonData = {
      "N":10
    }
  
    function handleClick() {
      jsonData["N"] = N
      // Send data to the backend via POST
      fetch('http://localhost:3000/api/ctest', {  // Enter your IP address here
  
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
          <input type="text" value={N} onChange={e => setN(Number(e.target.value) )} />
        </label>
      <div onClick={handleClick} style={{
        textAlign: 'center',
        width: '100px',
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