import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data , setdata] = useState([]);

  const getdata = async() =>{
      const result = await fetch("http://localhost:3005/photos");
      const res = await result.json();
      console.log(res);
      setdata(res)
  }


  useEffect(() => {
    getdata();
  },[])
  return (
    <div>
      <div id="main">
        {
          data.map((e)=>{
            return(
              <div key={e.p_id}>
              <div><h4>{e.p_id}</h4></div>
              <div><h4>{e.p_name}</h4></div>
              <div><img src={`http://localhost:3005/${e.p_image}`} alt="imag"/></div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
