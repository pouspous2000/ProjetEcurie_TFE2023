// import './css/Navbar.css';
import ElementNavbar from './Component/ElementNavbar';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


function NavbarProprietaire() {
    let compte = 'Client'

    if (compte === 'Admin') {
        return (


            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#AD9595' }} >
                <ElementNavbar href="" icon="bi-calendar" text="Calendrier" />
                <ElementNavbar href="factures" icon="bi-file-earmark-text" style={{ "fontSize": "2rem" }} text="Factures" />
                <ElementNavbar href="communaute" icon="bi-people" style={{ "fontSize": "2rem" }} text="Communauté" />
                <ElementNavbar href="stockage" icon="bi-clipboard-data" style={{ "fontSize": "2rem" }} text="Stockage" />
                <ElementNavbar href="rs" icon="bi-postage-heart" style={{ "fontSize": "2rem" }} text="Réseau Social" />
                <ElementNavbar href="parametre" icon="bi-gear" style={{ "fontSize": "2rem" }} text="Paramètre" />
            </ul>

        )
    }
    else if (compte === 'Client') {
        return (

            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#C18845' }} >
                <ElementNavbar href="" icon="bi-calendar" text="Calendrier" />
                <ElementNavbar href="profil" icon="bi-file-earmark-person" style={{ "fontSize": "2rem" }} text="Profil" />
                <ElementNavbar href="cheval" icon="bi-activity" style={{ "fontSize": "2rem" }} text="Cheval" />
                <ElementNavbar href="rs" icon="bi-postage-heart" style={{ "fontSize": "2rem" }} text="Réseau Social" />
                <ElementNavbar href="parametre" icon="bi-gear" style={{ "fontSize": "2rem" }} text="Paramètre" />
            </ul>
            
        )
    }
    else {
        return (
            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#AD9595' }} >
                <ElementNavbar href="" icon="bi-calendar" text="Calendrier" />
                <ElementNavbar href="rs" icon="bi-postage-heart" style={{ "fontSize": "2rem" }} text="Réseau Social" />
                <ElementNavbar href="communaute" icon="bi-people" style={{ "fontSize": "2rem" }} text="Communauté" />
                <ElementNavbar href="parametre" icon="bi-gear" style={{ "fontSize": "2rem" }} text="Paramètre" />
            </ul>
        )


    }
}
    
    export default NavbarProprietaire;