import axios from "axios";
import React,{useState,useEffect} from "react";
import { Oval } from "react-loader-spinner";

function App() {
const [loading ,setLoading]=useState(false);
  const [name,setName]=useState("");


  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setName(res.data[0].name))

  },[name])
  return (
    <div className="App">
      {
        loading ?

<Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
  :
  <h1>{name}</h1>
      } 
     
  </div>
  );
}
export default App;