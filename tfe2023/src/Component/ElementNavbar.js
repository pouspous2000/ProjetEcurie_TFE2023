
import { Link, NavLink } from 'react-router-dom';
function ElementNavbar({ href, text, icon }) {
    return(
    <li style={{listStyle:"none"}}>
    <NavLink exact to={`/${href}`} className="navbar-nav ml-auto">
        <a class={`bi ${icon}`} style={{color:'#F5F5DC', fontSize:'2rem'}} data-bs-toggle="tooltip" data-bs-placement="top" title={text}></a>
    </NavLink>
    </li>
   
);
  
}
export default ElementNavbar;

