import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"> <strong>Zylentrix</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav w-100 d-flex justify-content-evenly ">
        <li className="nav-item ">
          <Link className="home nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>


<li>{
  isAuthenticated && <p>{user.name}</p>
}</li>



{
isAuthenticated?<li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
Log Out
</button></li>:<li><button onClick={() => loginWithRedirect()}>Log In</button></li>

}




        
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar