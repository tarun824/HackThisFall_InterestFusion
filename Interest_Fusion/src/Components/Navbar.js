import React from 'react';

export default function Navbar(props){
  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary  bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="test-react/src/logo.svg" alt="Logo" width="20" height="20" class="d-inline-block align-text-top"></img>{props.title}</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Profile</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Signup/Login</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
};
