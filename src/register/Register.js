import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css';
// import { useHistory } from 'react-router-dom';


function Register() {
  const [user, setUser] = useState({
    username:'',
    email:'',
    phone:'',
    password:'',
    confirmpassword:''
  });
  
  // const history= useHistory();
  const handleInput = (e) => {    
    setUser({...user, [e.target.name] : e.target.value });
  }

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord ={ ...setUser }
    setRecords([...records, newRecord]);
    console.log(records);
  }
  
  return (
    <div>
      <div className="signup">
        <h2 style={{fontFamily:'Grape Nuts',fontSize:'32px'}}>Sign Up</h2>
        <form action='' onSubmit={handleSubmit}>
        <div className='pname'> 
        <div className="icon">
          <i class="zmdi zmdi-account"></i>
        </div>
        <input type="text" placeholder="Your Name" id="username" 
        autoComplete="off"
        name='username'
        value={user.username}
        onChange={handleInput}
        className='name'
        />
      </div>
      <div className='pemail'> 
        <div className="icon">
        <i class="zmdi zmdi-email"></i>
        </div>
        <input type="text" placeholder="Your Email" id="email" 
        autoComplete="off"
        name='email'
        value={user.email}
        onChange={handleInput}
        className='name'
        />
      </div>

      {/* <div>
        <PhoneInput 
        placeholder="Your"
        value={first}
        onChange={setfirst}
        className="phone"
        />
        </div> */}

        <div className='pemail'> 
        <div className="icon">
        <i class="zmdi zmdi-phone-in-talk"></i>
        </div>
        <input type="number" placeholder="Your Number" id="phone" 
        autoComplete="off"
        name='phone'
        value={user.phone}
        onChange={handleInput}
        className='name'
        />
        </div>
        <div className='ppass'> 
        <div className="icon">
        <i class="zmdi zmdi-lock"></i>
        </div>
        <input type="password"
        placeholder="Password" id="password" 
        autoComplete="off"
        name='password'
        value={user.password}
        onChange={handleInput}
        className='name' 
        />
        </div>

        <div className='ppass'> 
        <div className="icon">
        <i class="zmdi zmdi-lock"></i>
        </div>
        <input type="password"
        placeholder="Confirm your password" id="confirmpassword" 
        autoComplete="off"
        name='confirmpassword'
        value={user.confirmpassword}
        onChange={handleInput}
        className='name' 
        />
        </div>

        <div className='warn'>
          <span style={{color:'black'}}> 
          Already have an account?   
          </span>
        <Link to="/" >
        &nbsp;Log in
        </Link>
      </div>
        
        <div className="foot">
        <div className="button">
      <button type="submit" className='loginbtn'> 
      Signup 
      </button>
      </div>
        </div>
      
        </form>
        
      </div>
    </div>
  )
}

export default Register