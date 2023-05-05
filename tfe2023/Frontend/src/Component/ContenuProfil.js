import { useState } from "react";
import MesFactures from "./MesFactures";

function ContenuProfil(){


    let [display, setDisplay] = useState('apparait');
    let [clique, setClique] = useState('');

    function Affichage() {
        setDisplay('apparait')
    }

    function CacherMenuF() {
        setDisplay('disparait')
        setClique('facture')
    }

    function CacherMenuC() {
        setDisplay('disparait')
        setClique('cours')
    }

    function CacherMenuH() {
        setDisplay('disparait')
        setClique('horaire')
    }

    return (

        <div class="tab-pane fade" id='Info' role="tabpanel" aria-labelledby='Info-tab' style={{ backgroundColor: 'white', padding: '2rem', marginRight:'30%', width:'100%' }}>
            
            {display !== 'apparait' && <button className='buttonRetour' onClick={() => Affichage()}> <i style={{height:'2rem', width:'2rem'}}  className="bi bi-house-door buttonR"></i> </button>}
            {display === 'apparait' ?


                <div id={display}>
                    <button style={{ marginTop: '1rem' }} className='buttonMenu' onClick={() => CacherMenuF()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} class="bi bi-file-earmark-text"></i>
                        <div className='menuIconeCheval'> Mes factures </div>
                    </button>

                    <button style={{ marginTop: '2rem' }} className='buttonMenu' onClick={() => CacherMenuC()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} className="bi bi-mortarboard"></i>
                        <div style={{ Color: '#F5F5DC' }} className='menuIconeCheval'> Mes cours </div>
                    </button>

                    <button style={{ marginTop: '2rem' }} className='buttonMenu' onClick={() => CacherMenuH()}>
                        <i style={{ fontSize: '5rem', border: 'solid', borderRadius: '20px', padding: '10px', color: '#271503' }} class="bi bi-calendar2-date boutonM"></i>
                        <div className='menuIconeCheval'>Mon Planning </div>
                    </button>
                </div>

                :

                clique === 'facture' ?
                        <MesFactures/>
                    // <div>Mes cours </div>/
                    :
                    clique === 'cours' ?
                        <div>Mes cours </div>
                        // <InfoCheval NomCheval={NomCheval} />
                        :
                        clique === 'horaire'
                        &&
                        <div> Mes horaires</div>
                        // <HoraireCheval NomCheval={NomCheval} />
            }
        </div>
    )
}
export default ContenuProfil; 