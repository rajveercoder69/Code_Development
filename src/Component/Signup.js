import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '../jpe/sigfront.jpg'
import Image2 from '../jpe/signback.jpg'
function Signup() {
    const [credential,setCredential] =useState({email:"",name:"",password:"",cpassword:""})
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
    const navigate= useNavigate();
    const handlesubmit= async(e)=>{
        e.preventDefault();
        if(credential.password===credential.cpassword)
        {
        const response= await fetch(`http://localhost:5000/api/auth/createUser`,{
            method: 'POST',
            headers:{
                    'content-type': 'application/json',
            },
            body: JSON.stringify({name:credential.name,email:credential.email,password:credential.password})
    });
    const json = await response.json();
    console.log({"success":"Success fully updated",json:json});
    if(json.success)
    {
        localStorage.setItem('token',json.authtoken);
        navigate('/');
    }
    else
    {
        alert('Invalid credentials');
    }
}
else
{
    alert('password are not same');
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
        src={Image}
        alt='Logo'
        style={{
          width: isMobile ? '100%' : '700px',
          height: 'auto',
          borderRadius: '20px',
          margin: isMobile ? '0' : '50px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
    <div
      className='card'
      style={{
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#f2deee',
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Signup
      </h2>
      <form onSubmit={handlesubmit}>
        <div className='form-group' style={{ marginBottom: '10px' }}>
          <label htmlFor='name' style={{ color: '#333', display: 'block', marginBottom: '5px' }}>
            User-Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={credential.name}
            onChange={handlechange}
            aria-describedby='nameHelp'
            placeholder='Enter name'
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
          <small id='nameHelp' className='form-text text-muted' style={{ color: '#333' }}>
            We'll never share your details with anyone else.
          </small>
        </div>
        <div className='form-group' style={{ marginBottom: '10px' }}>
          <label htmlFor='email' style={{ color: '#333', display: 'block', marginBottom: '5px' }}>
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
              boxSizing: 'border-box',
            }}
          />
          <small id='emailHelp' className='form-text text-muted' style={{ color: '#333' }}>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group' style={{ marginBottom: '10px' }}>
          <label htmlFor='password' style={{ color: '#333', display: 'block', marginBottom: '5px' }}>
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
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div className='form-group' style={{ marginBottom: '20px' }}>
          <label htmlFor='cpassword' style={{ color: '#333', display: 'block', marginBottom: '5px' }}>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            id='cpassword'
            name='cpassword'
            value={credential.cpassword}
            onChange={handlechange}
            placeholder='Confirm Password'
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
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

export default Signup
