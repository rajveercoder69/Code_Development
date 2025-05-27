import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import Image from "../jpe/login_page.png"
import Image2 from "../jpe/front.jpg"

function Login() {
    const [credential,setCredential]=useState({email:"",password:""})
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const history = useNavigate();
    const handlesubmit= async(e)=>{
        e.preventDefault();
        const response= await fetch(`http://localhost:5000/api/auth/loginUser`,{
            method: 'POST',
            headers:{
                    'content-type': 'application/json',
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
    });
    
    const json = await response.json();
    console.log({"success":"Success fully updated",json:json});
    if(json.success)
    {
        localStorage.setItem('token',json.authtoken);
        history('/');
    }
    else
    {
        alert('Invalid credentials');
    }

    }
    const handlechange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
       }
  return (
    <div
    className='container'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '92vh',
      backgroundImage: `url(${Image2})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      flexDirection: isMobile ? 'column' : 'row',
    }}
  >
    <div
      style={{
        marginBottom: isMobile ? '20px' : '0',
        marginRight: isMobile ? '0' : '20px',
        width: isMobile ? '100%' : 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={Image2}
        alt='Logo'
        style={{
          width: isMobile ? '100%' : '700px',
          height: 'auto',
          borderRadius: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
    <div
      className='card'
      style={{
        width: '100%',
        maxWidth: '450px',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#3d53cc',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#ffffff',
        }}
      >
        Login
      </h2>
      <form onSubmit={handlesubmit}>
        <div className='form-group' style={{ marginBottom: '20px' }}>
          <label htmlFor='email' style={{ color: '#ffffff', display: 'block', marginBottom: '5px' }}>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={credential.email}
            onChange={handlechange}
            aria-describedby='emailHelp'
            placeholder='Enter email'
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <small id='emailHelp' className='form-text text-muted' style={{ color: '#ffffff' }}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group' style={{ marginBottom: '30px' }}>
          <label htmlFor='password' style={{ color: '#ffffff', display: 'block', marginBottom: '5px' }}>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={credential.password}
            onChange={handlechange}
            placeholder='Password'
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            color: '#ffffff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default Login
