import png from '../png.png'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import { counties } from "kenya";
import axios from "axios";

const Register = () => {
    const router = useNavigate()
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [neighborhoodassociation, setNeighbourhoodAssociation]= useState('');
    const [username, setUserName] = useState('');
    const [county, setCounty] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    
    const handleSubmit= (e) => {
        e.preventDefault();
        if(password===Confirmpassword){ 
            axios.post('https://vast-wildwood-07594.herokuapp.com/api/resident/', {
                first_name: firstname,
                last_name: lastname,
                neighborhood_association: neighborhoodassociation,
                county: county,
                password: password,
                username: username,  
              })
              .then(function (response) {
                console.log(response);
                router("/dashboard")
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }
        else{
            alert("password don't match");
        }
      
        console.log(firstname);
        console.log(lastname);
        console.log(neighborhoodassociation);
        console.log(username);
        console.log(county);
        console.log(password);
        console.log(Confirmpassword);
    }


    return (
        <div className='h-screen w-full bg-gray-100 flex flex-col md:flex-row px-8 items-center justify-center'>
            <div className='h-5/6 w-1/2 bg-white flex items-center justify-center flex-col'>
                <img src={png} alt='paza'/>
            </div>
            <div className='h-5/6 w-1/2 bg-[#020922] flex flex-col items-center justify-center'>
                <h1 className='text-3xl text-white font-bold mb-4'>Signup</h1>
                <form onSubmit={handleSubmit}>

                <div className="relative mb-4">
                <input 
                onChange={event => setFirstName(event.target.value)}
                placeholder='FirstName'
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
                onChange={event => setLastName(event.target.value)}
                placeholder='LastName'
                type='LastName'
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
                onChange={event => setNeighbourhoodAssociation(event.target.value)}
                placeholder='Neighborhood Association'
                type='Neighborhood Association'
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
                onChange={event => setUserName(event.target.value)}
                placeholder='User Name'
                type='User Name'
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
                onChange={event => setCounty(event.target.value)}
                placeholder='County'
                type='County'
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
            <div className="relative mb-4">
                <input 
                onChange={event => setConfirmPassword(event.target.value)}
                placeholder='Confirm Password'
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

<button className='w-1/3 bg-blue-400 pt-2 pb-2 mb-4 rounded-full text-1xl text-white'>
                 Signup
            </button>
            
            
            
                        </div>
            

            
                </form>
                </div>
           

            
        </div>
    )
}


export default Register
