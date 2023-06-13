import ElementHorizontalNavbar from './Component/ElementHorizontalNavbar';
import Nav from 'react-bootstrap/Nav';
import styles from './Component/ElementHorizontalNavbar.module.css'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function HorizontalNavbar() {

    let path = useLocation().pathname
    let status = "Admin"

    function ConditionnalDisplay(status) {
        if (status === "Admin") {
            return (
                <>
                    <ElementHorizontalNavbar icone="bi bi-calendar" href="/" />
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
            <Nav activeKey={location.pathname} className={`justify-content-center ${styles.navbarStyle} topNavbar`} variant="pills" defaultActiveKey="/home">
                {ConditionnalDisplay(status)}
            </Nav>
        </>
    )
}
export default HorizontalNavbar;
