import Facture from "./Facture/Facture";
import Client from "./Client/Client";
import Employe from "./Employe/Employe";

import { useState } from "react";

function Communaute() {
    let [display, setDisplay] = useState('apparait');
    let [clique, setClique] = useState('');

    function Affichage() {

        setDisplay('apparait')

    }

    function CacherMenuP() {
        setDisplay('disparait')
        setClique('pension')
    }

    function CacherMenuI() {
        setDisplay('disparait')
        setClique('info')
    }

    function CacherMenuH() {
        setDisplay('disparait')
        setClique('horaire')
    }
    return (

        <div class="tab-pane fade" id="coucou" role="tabpanel" style={{ backgroundColor: 'white', padding: '2rem' }}>

            {display !== 'apparait' && <button className='buttonRetour' onClick={() => Affichage()}> <i style={{ height: '2rem', width: '2rem' }} className="bi bi-house-door buttonR"></i> </button>}
            {display === 'apparait' ?


                <div id={display}>
                    <button style={{ marginTop: '1rem' }} className='buttonMenu' onClick={() => CacherMenuP()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} class="bi bi-bag-fill boutonM"></i>
                        <div className='menuIconeCheval'> Pension </div>
                    </button>

                    <button style={{ marginTop: '2rem' }} className='buttonMenu' onClick={() => CacherMenuI()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} className="bi bi-info-lg boutonM"></i>
                        <div style={{ Color: '#F5F5DC' }} className='menuIconeCheval'> Information </div>
                    </button>

                    <button style={{ marginTop: '2rem' }} className='buttonMenu' onClick={() => CacherMenuH()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} class="bi bi-calendar2-date boutonM"></i>
                        <div className='menuIconeCheval'>Horaire </div>
                    </button>
                </div>

                :

                clique === 'pension' ?
                    // <Facture />
                    coucou
                    :
                    clique === 'info' ?
                        // <Client />
                        cucu 
                        :
                        clique === 'horaire'
                        &&
                        // <Employe />
                        caca
            }
        </div>



    )
    // <div> Communaute</div>
    // <Client display = "d-"/>
    // <Facture/>
    // <Employe/>



}
export default Communaute; 