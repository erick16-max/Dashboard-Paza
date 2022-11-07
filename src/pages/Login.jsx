import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import png from '../png.png'
import axios from "axios";



const Login = () => {
    const router = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    

    const handleSubmit= (e) => {
        e.preventDefault();
        // console.log(username)
        // console.log(password)
        axios.post('https://vast-wildwood-07594.herokuapp.com/api/login/', {
            username: username,
            password: password,
        
    })
    .then(function (response) {
        console.log(response);
        router("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
      });
}




    return (
        <div className='h-screen w-full bg-gray-100 flex flex-col md:flex-row px-8 items-center justify-center'>
            <div className='h-5/6 w-1/2 bg-white flex items-center justify-center flex-col'>

                <img src={png} alt='paza'/>
            </div>
            <div className='h-5/6 w-1/2 bg-[#020922] flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-white font-bold mb-4'>Login</h1>
                <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                <input 
                onChange={event => setUserName(event.target.value)}
                placeholder='Username'
                type='text'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>
            <div className="relative mb-4">
                <input 
                onChange={event => setPassword(event.target.value)}
                placeholder='Password'
                type='Password'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-full
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
                    </div>
                    <button className='w-1/2 bg-blue-400 pt-2 pb-2 rounded-full text-1xl text-white'>
                 Login
            </button>
                    </form>
                    </div>
                  
                    </div>
            
            

       
            
            
        
    )
}

export default Login
