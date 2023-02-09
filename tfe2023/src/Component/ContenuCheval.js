
import {useState } from 'react';

import '../CSS/ContenuCheval.css';

import P from '../Img/P.png'
import I from '../Img/I.png'
import C from '../Img/C.png'

import PensionCheval from './PensionCheval';
import InfoCheval from './InfoCheval';


function ContenuCheval({ NomCheval }) {

   

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

        <div class="tab-pane fade" id={`${NomCheval}`} role="tabpanel" aria-labelledby={`${NomCheval}-tab`} style={{ backgroundColor: "#DDE2C6", padding:'2rem' }}>
            {display !== 'apparait' && <button className='buttonRetour' onClick={() => Affichage()}> <i className="bi bi-list buttonR"></i> </button>}
            {display === 'apparait' ?


                <div id={display}>
                    <button className='buttonMenu'   onClick={() => CacherMenuP()}>
                        <img style={{ width: '100px', height: '100px'}} src={P} alt='pension' />
                        <div style={{}}> Pension </div>
                    </button>

                    <button  style={{ marginTop:'2rem'}} className='buttonMenu' onClick={() => CacherMenuI()}>
                        <img  style={{ width: '100px', height: '100px'}} src={I} alt='information' />
                        <div style={{ textAlign: 'center' }}> Information </div>
                    </button>

                    <button style={{ marginTop:'2rem'}} className='buttonMenu' onClick={() => CacherMenuH()}>
                        <img  style={{ width: '100px', height: '100px'}} src={C} alt='Calandrier' />
                        <div style={{ textAlign: 'center' }}>Horaire </div>
                    </button>
                </div>

                :
                clique === 'pension' ?
                    <PensionCheval NomCheval={NomCheval} />


                    :
                    clique === 'info' ?
                        <InfoCheval NomCheval={NomCheval}/>
                    :
                    clique === 'horaire' && 
                    <div> coucou je suis la page horaire </div>
                        
                }

                        </div>
        


    )

}
            export default ContenuCheval;

