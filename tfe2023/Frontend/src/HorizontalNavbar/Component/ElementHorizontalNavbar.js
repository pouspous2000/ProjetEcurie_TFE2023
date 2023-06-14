
import styles from '../Component/ElementHorizontalNavbar.module.css'; 
import Nav from 'react-bootstrap/Nav';

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

