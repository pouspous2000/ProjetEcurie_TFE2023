import styles from "../VerticalNavbar.module.css";
function AffichageConditionnel({Status, path}){
    console.log(Status + ' et ' + path)
    

    if (Status === "Admin") {
        if (path === '/') {
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Calendrier
                        <button className= {`${styles.button} p-2`}> Jour </button>
                        <button className= {`${styles.button} p-2`}> Mois </button>
                        <button className= {`${styles.button} p-2`}> Année </button>
                        <button className= {`${styles.button} p-2`}> Agenda </button>
                    </ul>
                </>
            )
        }
        else if (path === '/communaute') {
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Commuanuté
                        <button className= {`${styles.button} p-2`}> Client </button>
                        <button className= {`${styles.button} p-2`}> Employé </button>
                        <button className= {`${styles.button} p-2`}> Facture </button>
                    </ul>

                </>
            )
        }
        else if (path === '/parametreAdmin') {
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Paramètres Admin
                        <button className= {`${styles.button} p-2`}> Pension </button>
                        <button className= {`${styles.button} p-2`}> Sortie </button>
                        <button className= {`${styles.button} p-2`}> Additif </button>
                        <button className= {`${styles.button} p-2`}> Cours </button>
                    </ul>

                </>
            )
        }
        else if (path === '/parametre'){
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Paramètres Admin
                        <button className= {`${styles.button} p-2`} onClick={clique}> Parametres personnels </button>
                    </ul>
                </>
            )
        }
    }

    else if (Status === "Client") {
       if (path === '/') {
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Calendrier
                        <button className= {`${styles.button} p-2`} onClick={clique}> Jour </button>
                        <button className= {`${styles.button} p-2`}> Mois </button>
                        <button className= {`${styles.button} p-2`}> Année</button>
                        <button className= {`${styles.button} p-2`}> Agenda</button>
                    </ul>

                </>
            )
        }
        else if (path === '/profil') {
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Commuanuté
                        <button className= {`${styles.button} p-2`}> Information </button>
                        <button className= {`${styles.button} p-2`}> Cheval </button>
                        <button className= {`${styles.button} p-2`}> Factures </button>
                    </ul>

                </>
            )
        }
        else if (path === '/parametre'){
            return (
                <>
                    <ul className="mt-4 d-flex flex-column align-content-center mb-1"> Paramètres Admin
                        <button className= {`${styles.button} p-2`} onClick={clique}> Parametres personnels </button>
                    </ul>
                </>
            )
        }
    }
}
export default AffichageConditionnel; 