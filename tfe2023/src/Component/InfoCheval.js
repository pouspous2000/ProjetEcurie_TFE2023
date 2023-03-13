import { NavLink, useNavigationType } from 'react-router-dom';
// import { useState } from 'react';
import "../CSS/InfoCheval.css"

import BoutonEnvoyer from './ButtonEnvoyer';

function InfoCheval({ NomCheval }) {

    let Propriétaire = [
        { IdProprietaire: '1', Cheval: 'Idem', NumMarechal: '0470117199', NomMarechal: 'Nuno Rocha', NumVeterinaire: '0123456789', NomVeterinaire: 'Céline Farin', Urgence: '1', Commentaire: 'Ne pas donner de carrotes' },
        { IdProprietaire: '1', Cheval: 'Opéra', NumMarechal: '0470117198', NomMarechal: 'Nuno Ro', NumVeterinaire: '0123456788', NomVeterinaire: 'Céline Fari', Urgence: '0', Commentaire: '' },
        { IdProprietaire: '1', Cheval: 'Aubade', NumMarechal: '0470117197', NomMarechal: 'Nuno R', NumVeterinaire: '0123456787', NomVeterinaire: 'Céline Fa', Urgence: '1', Commentaire: 'Attention cheval Méchant' }
    ]

    const onButtonClick = () => {

        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <div style={{ float: 'right', fontSize: '23px' }}> Informations</div>
            <h4 style={{ marginTop: '20px', textDecoration: 'underline' }}> Alimentation </h4>
            <div>
                <label style={{ fontSize: "20px", paddingRight: '5px', margin: '5px', width : '15%' }}>Matin : </label>
                <input className='input' type='text' placeholder="Ex: 1.5" style={{ width : '15%'}} /> L
            </div>
            <div>
                <label style={{ fontSize: "20px", paddingRight: '5px', margin: '5px', width : '15%' }}>Midi : </label>
                <input className='input' type='text' placeholder="Ex: 2" style={{ width : '15%'}}/> L
            </div>
            <div>
                <label style={{ fontSize: "20px", paddingRight: '5px', margin: '5px', width : '15%' }}>Soir : </label>
                <input className='input' type='text' placeholder="Ex: 1" style={{ width : '15%'}} /> L
            </div>

            {Propriétaire.filter(typeProprietaire => typeProprietaire.Cheval == NomCheval).map((typeProprietaireFiltre) =>
                <>
                    <h4 style={{ marginTop: '20px', textDecoration: 'underline' }}> Vétérinaire</h4>

                    <div>
                        <label style={{ fontSize: "20px", paddingRight: '5px' }}>Nom :</label>
                        <input className='input' value={typeProprietaireFiltre.NomVeterinaire} type='text' placeholder="Ex: Dr Farin" />

                        <label style={{ fontSize: "20px", paddingRight: '5px', paddingLeft: '5px' }}>Tel :</label>
                        <input className='input' value={typeProprietaireFiltre.NumVeterinaire} placeholder="Ex: 01 23 45 67 89" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" minlength="10" maxlength="14" type="tel" id="phoneVété" name="phone" required />

                        <span class="validity"></span>
                    </div>

                    <h4 style={{ marginTop: '20px', textDecoration: 'underline' }}>Maréchal Férrant</h4>

                    <div>
                        <label style={{ fontSize: "20px", paddingRight: '5px', }}>Nom :</label>
                        <input className='input' value={typeProprietaireFiltre.NomMarechal} type='text' placeholder="Ex: Nuno Rocha" />

                        <label style={{ fontSize: "20px", paddingRight: '5px', paddingLeft: '5px' }}>Tel :</label>
                        <input className='input' value={typeProprietaireFiltre.NumMarechal} placeholder="Ex: 01 23 45 67 89" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" minlength="10" maxlength="14" type="tel" id="phoneMF" name="phone" required />
                        <span class="validity"></span>
                    </div>
                </>
            )}


            <h4 style={{ marginTop: '20px', textDecoration: 'underline' }}> En cas d'urgence</h4>
            {Propriétaire.filter(typeProprietaire => typeProprietaire.Cheval == NomCheval).map((typeProprietaireFiltre) =>

                <>
                    {
                        typeProprietaireFiltre.Urgence === '1' ?
                            <>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Me prévenir en priorité
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Prévenir mon vétérinaire en priorité
                                    </label>
                                </div>
                            </>
                            :
                            <>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name={`${NomCheval}Radio`} id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Me prévenir en priorité
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name={`${NomCheval}Radio`} id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Prévenir mon vétérinaire en priorité
                                    </label>
                                </div>
                            </>
                    }
                </>
            )}
            <h4 style={{ marginTop: '20px', textDecoration: 'underline' }}> Commentaire</h4>
            {Propriétaire.filter(typeProprietaire => typeProprietaire.Cheval == NomCheval).map((ProprietaireMap) =>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Commentaire sur votre cheval ' rows="3">{ProprietaireMap.Commentaire}</textarea>
            )}
            <div style={{ marginLeft: '25%' }}>
                <i class="bi bi-file-text-fill" style={{ fontSize: "2rem" }}></i>
                <NavLink onClick={onButtonClick} >Papier du cheval </NavLink>
                <i class="bi bi-file-text-fill" style={{ fontSize: "2rem" }}></i>
                <NavLink onClick={onButtonClick} >Règlement intérieur</NavLink>
            </div>

            <BoutonEnvoyer Text='Enregistrer'/>
        </>
    )
}
export default InfoCheval; 