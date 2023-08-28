import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
    const [user, setUser] =useState({});

    const handleSignup = e =>{

        e.preventDefault();

        const name = e.target.name.value;
        const user = {name: name};
        axios.post('https://task-backend-bishalbhowmik.vercel.app/user', user)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <input className='border border-solid border-black' name="name" type="text" />
            
                <button type='submit'> 
                    submit
                </button>
            </form>
        </div>
    );
};

export default Signup;