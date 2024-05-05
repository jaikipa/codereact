import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CardWidget/CardWidget';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mi Ecommerce JC</a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/carrito">Categoria</a>
            </li>
          </ul>
        </div>
      </div>
      <CardWidget />
    </nav>
    
    </>
  )
}

export default Navbar