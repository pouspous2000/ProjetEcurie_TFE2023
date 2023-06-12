
import styles from '../HorizontalNavbar.module.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'


function ElementHorizontalNavbar({href, icone}) {
    return (
        <Nav.Item>
            <Nav.Link href = {`${href}`}  className={`${styles.iconeStyle }`} >
                <i className={icone}></i>
            </Nav.Link>
        </Nav.Item>
    )

} 
export default ElementHorizontalNavbar;

// className={`${styles.iconeStyle }`}