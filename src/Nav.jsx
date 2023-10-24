import React from 'react'

export default function Nav() {
  return (
  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-dark" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href="Nav.jsx">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="Nav.jsx">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Nav.jsx">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Nav.jsx">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



</div>

  )
}
