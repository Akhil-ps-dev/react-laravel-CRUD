import React,{useState} from 'react'
import http from '../axios/http'
import {useNavigate} from 'react-router-dom'

export default function Create() {
 const navigate = useNavigate();
const [inputs, setInput] = useState({});




const handleChange = (event)=>{
const name = event.target.name; 
const value = event.target.name;

setInput(values=>({...values,[name]:value}))


}
const submitForm =()=>{
 http.post('/users', inputs).then((res)=>{
   navigate('/')
 })
}

  return (
    <div>
      <h2>New User</h2>
   
        
      <div className='row'>
        <div className='col-sm-6 '>
          <div className='card p-4'>
          <label>Name</label>
          <input type="text" name="name" value={inputs.name || ''} onChange={handleChange} className='form-control mb-2' />
          <label >Email</label>
          <input type="email" name="email" value={inputs.email || ''} onChange={handleChange} className='form-control mb-2' />

          <label>Password</label>
          <input type="password" name="password" value={inputs.password || ''}  onChange={handleChange} className='form-control mb-2'  />

          <button type="submit" onClick={submitForm} className='btn btn-info mt-2'>Create</button>

          </div>
       
        </div>

      </div>
    

   
    </div>
  )
}

// {
  /* <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={submitForm}>
                                    <div className='form-group mb-3'>
                                        <label >Full Name</label>
                                        <input className='form-control' value={registerInput.name} onChange={handleInput} type="" name="name" />

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label >Email </label>
                                        <input type="" value={registerInput.email} onChange={handleInput} className='form-control' name="email" />

                                    </div>
                                    <div className='form-group mb-3'>
                                        <label >Password </label>
                                        <input type="" value={registerInput.password} onChange={handleInput} className='form-control' name="password" />

                                    </div>

                                    <div className='form-group mb-3'>
                                        <button type="submit" className='btn btn-primary'>Register</button>
                                    </div>


                                </form>

                            </div>

                        </div>
                    </div>

                </div>


            </div> */
          // }