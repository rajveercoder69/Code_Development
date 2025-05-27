import React ,{ useEffect }from 'react'
import {useLocation, Link, useNavigate} from 'react-router-dom'
import imageicon from '../jpe/devops.png'
 const Navbar= ()=> {
 let location= useLocation();
 const Navigate=useNavigate();
 useEffect(()=>{
  console.log(location);
 },[location]);
 const handlelogout=()=>{
  localStorage.removeItem('token');
  Navigate("/")
 }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="/"> <img src={imageicon} alt="Icon" style={{ width: '40px', height: '40px', marginRight: '1px' }}/>AgileApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className='d-flex'>
            <Link className='btn btn-primary mx-1' to="/Login" role="button">Login</Link>
            <Link className='btn btn-primary mx-1' to="/Signup" role="button">Signup</Link>
          </form>:<button className='btn btn-primary' onClick={handlelogout}>Logout</button>}
        </div>
      </div>
    </nav>
         </>
    )
}

export default Navbar;
