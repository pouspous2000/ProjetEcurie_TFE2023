import { useState, useEffect } from "react";
import BoutonEnvoyer from "./ButtonEnvoyer";
import '../CSS/ModalAjouterCheval.css';

function ModalAjouterCheval() {

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
    
    const [pension , setPension] = useState(0);
    const [aditif, setAditif] = useState(0)


    useEffect(() => {


    })

    return (
        <div style ={{color:'#271503'}}class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle" style={{color:'#271503'}}>Ajouter un cheval</h3>
                        <i data-bs-dismiss="modal" style={{fontSize:'30px'}} class="bi bi-x-circle-fill"></i>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <h6>Nom du cheval</h6>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Idem de Valmont" />
                            </div>

                            <div class="form-group">
                                <h6 style={{ marginTop: '1rem' }} for="exampleFormControlSelect1">Type de pension </h6>
                                <select class="form-control" style={{ marginTop: '1rem' }} id="exampleFormControlSelect1" onChange={e => setPension(Number(e.target.value))}  placeholder="Ex: Idem de Valmont">
                                    <option className='placeHolderSelect' selected disabled hidden style={{ color: 'green' }} value=''> Selectionnez votre pension</option>
                                    {
                                        TypesPensions.map((typePensionsIndex) =>
                                            <option value={typePensionsIndex.Prix} id='optionPension'>
                                                {typePensionsIndex.Pension}  ({typePensionsIndex.Prix}€)
                                            </option>
                                        )
                                    }
                                </select>

                                <div style={{ marginTop: '1rem', backgroundColor: '#F5F5DC', marginRight: 'auto', marginLeft: 'auto', color: '#271503'}}>
                                    {
                                        TypesPensions.filter(typePensionsIndex => Number(typePensionsIndex.Prix) === pension).map((typePensionsIndexFiltre) =>

                                            typePensionsIndexFiltre.Description
                                        )
                                    }
                                </div>
                            </div>
                            <div class="form-group">
                                <h6 style={{ marginTop: '1rem' }} for="exampleFormControlSelect2">Choix des Additifs</h6>
                                {
                                    TypesAditifs.map((typesAditifsIndex) =>
                                      
                                        <>

                                            <div style={{ float: 'left' }}>{typesAditifsIndex.Nom}
                                                <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginLeft: '2px' }}>  ( {typesAditifsIndex.Prix} €) </p>
                                            </div>
                                            <select class="form-control" style={{ float: "right", marginBottom: '1rem' }} required onChange={e => setAditif(Number(aditif) + Number(e.target.value))}>
                                                
                                                <option value={typesAditifsIndex.Prix}>
                                                    Oui
                                                </option>
                                                <option value={`-${typesAditifsIndex.Prix}`} selected>
                                                    Non 
                                                </option>
                                            </select>
                                        </>
                                    )
                                }
                            </div>


                        </form>


                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ajoutez une remarque, problèmes de santées, allergie etc..."></textarea>

                        <div>

                            <hr />
                            <div style={{ float: 'left', fontWeight: 'bold', fontSize: '20px' }}>Total : </div>

                            <div style={{ float: 'right' }}>{pension + aditif}€</div>


                        </div>
                    </div>
                    <div class="modal-footer">
                        
                        <BoutonEnvoyer Text='Enregistrer'/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ModalAjouterCheval; 