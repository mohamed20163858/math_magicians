import { Link } from 'react-router-dom';
import './Navbar.css';

const visitPageAction = (e) => {
  const links = document.querySelectorAll('.outer .inner-2 ul li a');
  for (let i = 0; i < links.length; i += 1) {
    if (links[i] === e.target) {
      e.target.classList.add('visited');
    } else {
      links[i].classList.remove('visited');
    }
  }
};

const Navbar = () => (
  <div className="outer">
    <div className="inner-1">
      <Link to="/"><h1>Math Magicians</h1></Link>
    </div>
    <div className="inner-2">
      <ul>
        <li><Link to="/" onClick={visitPageAction}>Home</Link></li>
        <li><Link to="/Calculator" onClick={visitPageAction}>Calculator</Link></li>
        <li><Link to="/Quote" onClick={visitPageAction}>Quote</Link></li>
      </ul>
    </div>
  </div>
);
export default Navbar;
