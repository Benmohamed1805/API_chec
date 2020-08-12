import React ,{useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    const fetchData= async()=>{
      const result= await Axios.get('http://jsonplaceholder.typicode.com/users')
      setUser(result.data)
    }
    fetchData()
     
    // Axios.get('http://jsonplaceholder.typicode.com/users')
    // .then(res=>setUser(res.data))
    // .catch(er=>console.log(er))

  },[])

  return (
    <div className="App">
     {user.map(el=><div style={{border:"1px solid black"}}>
     <p>{el.name}</p>
     <p>{el.email}</p>
     <p>{el.address.street}</p>
     </div>)}
      
    </div>
  );
}

export default App;
