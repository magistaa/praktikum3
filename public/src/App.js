import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div> <hr />
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
  <a className="navbar-brand" href="#">
    <img src="herp.jpg" alt="logo"  ></img> 
  </a>

  <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="Beranda">Beranda <span className="sr-only"></span></a>
      </li>
    <li className="nav-item active">
      <a className="nav-link" href="Tentangsaya">Tentangsaya <span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Karya">Karya <span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Kontak">Kontak <span className="sr-only"></span></a>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        semuanya
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="Tentangsaya">Tentangsaya</a>
        <a className="dropdown-item" href="Karya">Karya</a>
        <a className="dropdown-item" href="Kontak">Kontak</a>
      </div>
    </li>
  </ul>

</nav>
      <p><Utama /></p>
      </div>

    );
  }
}

export default App;
