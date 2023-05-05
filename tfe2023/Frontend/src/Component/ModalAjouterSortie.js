import BoutonEnvoyer from "./ButtonEnvoyer";
import { useState } from "react";


function ModalAjouterSortie() {
    
    let [display, setDisplay] = useState('disparait');

    function Afficher() {

        setDisplay('apparait')

    }
    function Cacher() {

        setDisplay('disparait')

    }
    let IdSorties = [
        { Nom: 'Sortie Semaine', Index: 1 },
        { Nom: "Sortie Week-End", Index: 2 },
        { Nom: 'Sortie Semaine & Week-end', Index: 3 }
    ]
    
    let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    

    return (
        <div style={{ color: '#271503' }} class="modal fade" id="modalAjouterSortie" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle" style={{ color: '#271503', textAlign: 'center' }}>Ajouter un nouvel aditif</h3>
                        <i data-bs-dismiss="modal" style={{ fontSize: '30px' }} class="bi bi-x-circle-fill"></i>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <h5>Nom de l'aditif</h5>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Marcheur" />
                            </div>
                            <div class="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <h5>Prix de l'aditif au mois <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginRight: "255px" }}>(En €)</p> </h5>
                                <input required type="number" min="10" max="100" id="exampleFormControlInput1" style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'lightgrey', width: '100px', }} placeholder="Ex:110 &#x2C4;" />
                            </div>
                            <div class="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <h5>Prix de l'aditif à l'unitée <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginRight: "255px" }}>(En €)</p> </h5>
                                <input required type="number" step='0.5' min="1" max="100" style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'lightgrey', width: '100px' }} id="exampleFormControlInput1" placeholder="Ex:110  &#x2C4;" />
                            </div>
                            <div class="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <h5>Période de sortie </h5>
                                <select style={{ borderRadius: '5px', borderColor: 'lightgrey', padding: '6px', width: '400px' }} >
                                    {
                                        IdSorties.map((IdSortiesmap) =>
                                            <option>{IdSortiesmap.Nom}</option>
                                        )
                                    }

                                </select>
                            </div>
                            <div class="form-group" style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <h5>Période de l'année</h5>
                                <div>
                                    <input type="radio" name="Période" checked onClick={() => Cacher()} />
                                    <label for="huey" style={{marginLeft:'5px'}}>  Toute l'année</label>
                                </div>

                                <div onClick={() => Afficher()}>
                                    <input type="radio" id="dewey" name="Période" value="dewey" />
                                    <label for="dewey"  style={{marginLeft:'5px'}}>  Période Limité (attention lag de pointeur)</label>
                                </div>

                                <div id={display}>
                                    <div>Du : </div>
                                    <select className="form-group" style={{ width:'fit-content', borderRadius: '5px', borderColor: 'lightgrey' }} >
                                        {Array.from(Array(31), (e, i) => 
                                            <option>
                                                {i + 1}
                                            </option>
                                        )}
                                    </select>
                                    <select className="form-group" style={{ width:'fit-content', borderRadius: '5px', borderColor: 'lightgrey' }}>
                                        {
                                            mois.map((moisMap) =>
                                                <option>
                                                    {moisMap}
                                                </option>
                                            )
                                        }
                                    </select>
                                    <div>Au : </div>
                                    <select className="form-group" style={{ width:'fit-content', borderRadius: '5px', borderColor: 'lightgrey' }} >
                                        {Array.from(Array(31), (e, i) => 
                                            <option>
                                                {i + 1}
                                            </option>
                                        )}
                                    </select>
                                    <select className="form-group" style={{ width:'fit-content', borderRadius: '5px', borderColor: 'lightgrey' }}>
                                        {
                                            mois.map((moisMap) =>
                                                <option>
                                                    {moisMap}
                                                </option>
                                            )
                                        }
                                    </select>

                                </div>
                            </div>


                        </form>
                        <div class="modal-footer">

                            <BoutonEnvoyer Text='Enregistrer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalAjouterSortie;