import React from 'react'

export default function Navbar({ toggleStyle, btnText, myStyle }) {

  return (
    <nav className="navbar navbar-expand-lg" style={myStyle}>
      <div className="container-fluid">
        <img src='images/Aksharlogo.png'alt='logo' height="100px" width="100px" />
        <a className="navbar-brand mx-3" href="/" style={myStyle}>Akshar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={myStyle}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={myStyle}>About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-warning" onClick={(e) => { e.preventDefault(); toggleStyle(); }}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
