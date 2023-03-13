import { useState, useEffect } from "react";
import BoutonEnvoyer from "./ButtonEnvoyer";
import '../CSS/ModalAjouterCheval.css';

function ModalAjouterPension() {

    let TypesPensions = [
        { Pension: "Pension Total", Prix: "500", Description: "La pension total comprend, 3 repas de grannulé par jour, le box fait tous les jours ainsi qu'une ration de foin matin et soir" },
        { Pension: "Pension Partiel", Prix: "400", Description: "La pension partiel comprend, 3 repas de grannulé par jour, le box fait un jour sur deux ansi qu'une ration de foin le soir" }

    ]

    let TypesAditifs = [
        { Type: "SortiesSM", Nom: "Sortie Semaine", Prix: '50', Index: 1 },
        { Type: "SortiesWE", Nom: "Sortie Week-End", Prix: '60', Index: 2 },
        { Type: "SupFoin", Nom: "Supplément foin", Prix: '70', Index: 3 },
        { Type: "SupGrain", Nom: "Grannulés Personnels", Prix: '80', Index: 4 }
    ]

    const [pension, setPension] = useState(0);
    const [aditif, setAditif] = useState(0)


    useEffect(() => {


    })

    return (
        <div style={{ color: '#271503' }} class="modal fade" id="modalAjouterPension" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle" style={{ color: '#271503', textAlign:'center' }}>Ajouter une nouvelle formule de pension</h3>
                        <i data-bs-dismiss="modal" style={{ fontSize: '30px' }} class="bi bi-x-circle-fill"></i>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group" style={{marginTop:'20px', marginBottom:'20px'}}>
                                <h5>Nom de la pension</h5>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Pension Complète" />
                            </div>
                            <div class="form-group" style={{marginTop:'20px', marginBottom:'20px'}}>
                                <h5>Prix de la pension <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginRight:"255px"}}>(En €)</p> </h5>
                                <input required type="number"  min="10" max="100" class="form-control" id="exampleFormControlInput1" style={{width:'100px'}} placeholder="Ex:110" />
                            </div>
                            <h5>Description de la pension </h5>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Décrivez ce que propose votre pension"></textarea>

                        </form>
                        <div class="modal-footer">

                            <BoutonEnvoyer Text= 'Enregistrer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
            export default ModalAjouterPension; 