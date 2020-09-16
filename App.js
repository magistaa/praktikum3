import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div> <hr />
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <a className="navbar-brand" href="#">
    <h3><img src="logo192.png" width="58rem"></img>Dashboard</h3> 
  </a>

  <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link " href="Beranda"><Link to='/'>Beranda</Link><span className="sr-only"></span></a>
      </li>
    <li className="nav-item active">
      <a className="nav-link" href="Tentangsaya"><Link to='Tentangsaya'>Tentangsaya</Link><span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Karya"><Link to='Karya'>Karya</Link> <span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Kontak"><Link to='Kontak'>Kontak</Link> <span className="sr-only"></span></a>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
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


