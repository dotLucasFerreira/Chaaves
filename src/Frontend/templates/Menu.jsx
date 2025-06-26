import React, { useState } from 'react';
import '../css/Menu.css'; // Transição customizada
import Header from './Header'

function Menu() {

  return (
    <div className="headerWmenu d-flex sticky-top d-flex justify-content-center align-items-center">
      <div className="menu">
        <div className="d-flex justify-content-center">
          <span className="text">Cursos </span>
          <span className="text">Receitas</span>
        </div>
      </div>
      <Header />
      <div className="menu">
         <div className="d-flex justify-content-center">
          <span className="text">Galeria</span>
          <span className="text">Contato</span>
        </div>
      </div>
    </div>
    
  );
}

export default Menu;