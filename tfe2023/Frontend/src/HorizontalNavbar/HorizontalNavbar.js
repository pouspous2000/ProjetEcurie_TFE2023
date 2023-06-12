import ElementHorizontalNavbar from './Component/ElementHorizontalNavbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Component/ElementHorizontalNavbar.module.css'
// import Container from 'react-bootstrap/Container';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function HorizontalNavbar() {
    let path = useLocation().pathname
    let status = "Admin"

    function ActifStatus(){

    }

    function ConditionnalDisplay(status) {
        if (status === "Admin") {
            return (
                <>
                    <ElementHorizontalNavbar icone="bi bi-calendar" href="/"/>
                    <ElementHorizontalNavbar icone="bi bi-people" href="/communaute" />
                    <ElementHorizontalNavbar icone="bi-wrench-adjustable" href="/parametreAdmin" />
                    <ElementHorizontalNavbar icone="bi-gear" href="/parametre" />
                </>
            )
        }
        else if (status === "Client") {
            return (
                <>
                    <ElementHorizontalNavbar icone="bi bi-calendar" href="#" />
                    <ElementHorizontalNavbar icone="bi bi-person-circle" href="#" />
                    <ElementHorizontalNavbar icone="bi-gear" href="#" />
                </>
            )
        }
        else if (status === "Employé") {
            return (
                <>
                    <ElementHorizontalNavbar icone="bi bi-calendar" href="#" />
                    <ElementHorizontalNavbar icone="bi bi-people" href="#" />
                    <ElementHorizontalNavbar icone="bi-gear" href="#" />
                </>
            )
        }
    }


    return (
        <>
            {/* <Navbar expand="sm" className={styles.navbarColor}> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleNavbar}>
                    <i class= {` "bi bi-list ${styles.toggleNavbar}`}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav"> */}
                    <Nav activeKey={location.pathname} className={`justify-content-center ${styles.navbarStyle} red `} variant="pills" defaultActiveKey="/home">
                        {ConditionnalDisplay(status)}
                    </Nav>
                {/* </Navbar.Collapse > */}
            {/* </Navbar> */}
        </>
    )
}
export default HorizontalNavbar;
