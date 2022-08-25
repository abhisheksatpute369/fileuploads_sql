import React, {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [data , setdata] = useState([]);
  // const [insert, setinsert] = useState({
  //   p_name: "",
  //   p_image: ""
  // })

  // function for getting all images 
  const getdata = async() =>{
      const result = await fetch("http://localhost:3005/photos");
      const res = await result.json();
      console.log(res);
      setdata(res)
  }

  //function for insert images

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   const url = "http://localhost:3005/addphotos";
  //   await fetch(url, {method: "POST",body: JSON.stringify(insert)}).then(response => response.json()).then(json => console.log(json))
  //   .catch((err)=>{console.log(err)});

  // }
  // const handlechange = (e)=>{
  //    var name = e.target.name;
  //    var val = e.target.value;
  //    if(name === "p_image"){
  //       val = e.target.files[0];
  //    }
  //    else{
  //     val = e.target.value;
  //    }
  //    setinsert({...insert,[name] : val})
  //    console.log(insert);

  // }
  const handlesubmit = (e) => {
    document.getElementById("myform").action = "http://localhost:3005/addphotos";

  }

  useEffect(() => {
    getdata();
  },[])
  return (
    <div>
      <form id="myform" method="post" encType="multipart/form-data" onSubmit={handlesubmit}>
        <input type="text" name="p_name"  />
        <input type="file" name="p_image" />
        <input type="submit" value="Add Image"/>
      </form>
      <div>
        {
          data.map((e)=>{
            return(
              <div key={e.p_id} id="main">
              <div id="div1"><h4>{e.p_id}</h4></div>
              <div id="div2"><h4>{e.p_name}</h4></div>
              <div id="div3"><img src={`http://localhost:3005/${e.p_image}`} alt="imag" height="100pxx" width="100px"/></div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
