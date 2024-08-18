// import ReLinkct from 'reLinkct';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Nav.scss';


export default function Nav() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand  text-white" to="#">
    <span className='text-danger fw-bold'>Top</span> Movies
    </Link>
    <div className="collapse navbar-collapse" id="nLinkvbLinkrNLinkv">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link text-white" to="/MyLibrary"><CiHeart className='fs-4'/>Favorites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/Contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}
