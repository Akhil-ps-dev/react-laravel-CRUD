import React, { useEffect } from 'react'
import {useState} from 'react'
import http from '../axios/http'
import {useNavigate, useParams} from 'react-router-dom'

export default function Edit(props) {
    const navigate = useNavigate();
    const [inputs, setInput] = useState({});
   
    const {id}= useParams();

    useEffect(()=>{

fetchUser();

    },[]);
    const fetchUser=()=>{
     http.get('/users/'+id+'/edit').then((res)=>{
         setInput({
             name:res.data.name,
             email:res.data.email,
             

         });
     })   ;
    }

    const handleChange = (event)=>{
    const name = event.target.name; 
    const value = event.target.name;
    
    setInput(values=>({...values,[name]:value}))

    const submitForm =()=>{
        http.post('/users/'+id,inputs).then((res)=>{
          navigate('/')
        })
       }


  return (
    <div>
    <h2>Edit User</h2>
 
      
    <div className='row'>
      <div className='col-sm-6 '>
        <div className='card p-4'>
        <label>Name</label>
        <input type="text" name="name" value={inputs.name || ''} onChange={handleChange} className='form-control mb-2' />
        <label >Email</label>
        <input type="email" name="email" value={inputs.email || ''} onChange={handleChange} className='form-control mb-2' />

     
        <button type="button" onClick={submitForm} className='btn btn-info mt-2'>Update</button>

        </div>
     
      </div>

    </div>
  

 
  </div>
  )
}

}