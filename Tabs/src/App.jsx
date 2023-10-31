import { useEffect } from "react";
import Loading from "./Loading";
import { useState } from "react";
import Job from "./Job";


function App() {
  const [loading,setLoading]=useState(true)
  const [job,setJob]=useState([])

  const url = 'https://course-api.com/react-tabs-project';

  const fetchData= async ()=>{
    setLoading(true)
      const response=await fetch(url)
      const jsonData=await response.json();
      setJob(jsonData)
      setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  if(loading){
   return (<Loading/>) 
  }

 
  return (
    <>
        <Job job={job}/>
    </>
  )
}

export default App
