import React from "react";
import { Nav, Navbar, } from "react-bootstrap";
import styles from "./VerticalNavbar.module.css";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import AffichageConditionnel from "./Component/AffichageConditionnel";

function VerticalNavbar() {

    let path = useLocation().pathname
    let Status = "Admin"

    let [display, setDisplay] = useState('apparait');
    let [clique, setClique] = useState('');


    return (
        <>
            <Navbar expand="md" className={`${styles.VerticalNavbar} col-md-2 col-lg-2 `} style={{backgroundColor:'#A3BBAE'}} >
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className={`${styles.toggleNavbar}`} >
                    <i class={` "bi bi-list ${styles.iconToggleNavbar}`}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav  variant="pills" defaultActiveKey="/home">
                        <AffichageConditionnel Status = {Status} path = {path}/>
                    </Nav>
                </Navbar.Collapse >
            </Navbar>

        </>
    )
}
export default VerticalNavbar; 
// className= {`${styles.Navbar}`}
// className={styles.toggleNavbar}