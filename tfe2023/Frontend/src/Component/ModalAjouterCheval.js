import { useState, useEffect } from "react";
import BoutonEnvoyer from "./ButtonEnvoyer";
import '../CSS/ModalAjouterCheval.css';

function ModalAjouterCheval() {


    let TypesPensions = [
        { Pension: "Pension Total", Prix: "500", Description: "La pension total comprend, 3 repas de grannulé par jour, le box fait tous les jours ainsi qu'une ration de foin matin et soir" },
        { Pension: "Pension Partiel", Prix: "400", Description: "La pension partiel comprend, 3 repas de grannulé par jour, le box fait un jour sur deux ansi qu'une ration de foin le soir" }
    ]

    let TypesAditifs = [

        { IdAditif: 1, Nom: "Supplément foin", Prix: '50' },
        { IdAditif: 2, Nom: "Grannulés Personnels", Prix: '-50' },
        { IdAditif: 3, Nom: "Copeau", Prix: '50' }
    ]

    let TypesSorties = [
        { IdSorties: '1', Nom: 'Marcheur', PrixMois: '50', PrixUnite: '2.50', DebutJ: null, DebutM: null, FinJ: null, FinM: null, IdIndex: 1 },
        { IdSorties: '2', Nom: 'Paddock', PrixMois: '50', PrixUnite: '2.50', DebutJ: null, DebutM: null, FinJ: null, FinM: null, IdIndex: 2 },
        { IdSorties: '3', Nom: 'Prairie', PrixMois: '50', PrixUnite: '2.50', DebutJ: '01', DebutM: '05', FinJ: '01', FinM: '09', IdIndex: 1 },
        { IdSorties: '4', Nom: 'Montes', PrixMois: '500', PrixUnite: '30', DebutJ: null, DebutM: null, FinJ: null, FinM: null, IdIndex: 3 },
        { IdSorties: '5', Nom: 'Sur Mesure', PrixMois: '70', PrixUnite: '', DebutJ: null, DebutM: null, FinJ: null, FinM: null, IdIndex: 3 }

    ]

    let IndexSorties = [
        { IdIndex: 1, Nom: 'Sortie Semaine', Index: 1 },
        { IdIndex: 2, Nom: "Sortie Week-End", Index: 2 },
        { IdIndex: 3, Nom: 'Sortie Semaine & Week-end', Index: 3 }
    ]

    let Semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']

    
    const [pension, setPension] = useState(0);
    const [aditif, setAditif] = useState(0);
    const [sortiesSM, setSortiesSM] = useState(0);
    const [sortiesWE, setSortiesWE] = useState(0);

    

    const handleChange = e => {
        if (e.target.checked) {
            setAditif(Number(aditif) + Number(e.target.value))
        } else {
            setAditif(Number(aditif) - Number(e.target.value))
        }
    };

    let [display, setDisplay] = useState('disparait');

    const Affichage = e => {

        if (display === 'disparait' && e.target.value === '70') {
            setDisplay('apparait')
        }
        else {
            setDisplay('disparait')
        }
        setSortiesSM(Number(e.target.value))


    }


    useEffect(() => {


    })

    return (
        <div style={{ color: '#271503' }} class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle" style={{ color: '#271503' }}>Ajouter un cheval</h3>
                        <i data-bs-dismiss="modal" style={{ fontSize: '30px' }} class="bi bi-x-circle-fill"></i>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <h6>Nom du cheval</h6>
                                <input required type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ex: Idem de Valmont" />
                            </div>

                            <div class="form-group">
                                <h6 style={{ marginTop: '1rem' }} for="exampleFormControlSelect1">Type de pension </h6>
                                <select class="form-control" style={{ marginTop: '1rem' }} id="exampleFormControlSelect1" onChange={e => setPension(Number(e.target.value))} placeholder="Ex: Idem de Valmont">
                                    <option className='placeHolderSelect' selected disabled hidden style={{ color: 'green' }} value=''> Selectionnez votre pension</option>
                                    {
                                        TypesPensions.map((typePensionsIndex) =>
                                            <option value={typePensionsIndex.Prix} id='optionPension'>
                                                {typePensionsIndex.Pension}  ({typePensionsIndex.Prix}€)
                                            </option>
                                        )
                                    }
                                </select>

                                <div style={{ marginTop: '1rem', backgroundColor: '#F5F5DC', marginRight: 'auto', marginLeft: 'auto', color: '#271503' }}>
                                    {
                                        TypesPensions.filter(typePensionsIndex => Number(typePensionsIndex.Prix) === pension).map((typePensionsIndexFiltre) =>

                                            typePensionsIndexFiltre.Description
                                        )
                                    }
                                </div>
                            </div>

                            <div>
                                <h6 style={{ marginTop: '1rem' }} for="exampleFormControlSelect1">Type d'Aditif </h6>
                                {
                                    TypesAditifs.map((TypesAditifsMap) =>
                                        <div>
                                            <input onChange={handleChange} type="checkbox" value={TypesAditifsMap.Prix} id={TypesAditifsMap.Nom} name={TypesAditifsMap.Nom} />
                                            <label style={{ marginLeft: '10px' }} for={TypesAditifsMap.Nom}>{TypesAditifsMap.Nom} ({TypesAditifsMap.Prix}€)  </label>
                                        </div>
                                    )
                                }
                            </div>

                            <div>
                                <h6 style={{ marginTop: '1rem' }} for="exampleFormControlSelect1">Type de Sorties </h6>

                                <h8>Sorties Semaine</h8>
                                <select class="form-control" onChange={Affichage}>
                                    <option className='placeHolderSelect' selected disabled hidden value=''> Selectionnez votre sortie</option>
                                    {
                                        TypesSorties.filter(TypesSortiesFilter => TypesSortiesFilter.IdIndex === 1 || TypesSortiesFilter.IdIndex === 3).map((TypesSortiesFilterMap) =>
                                            <option value={TypesSortiesFilterMap.PrixMois}> {TypesSortiesFilterMap.Nom} ({TypesSortiesFilterMap.PrixMois}€)</option>
                                        )
                                    }
                                    <option value=''>Pas de sorties</option>

                                </select>
                                <div id={display} style={{backgroundColor:'#F5F5DC', maginLeft:'20px'}}>
                                    
                                  
                                        <h6 style={{marginLeft:'5px'}}>Composez votre semaine</h6>
                                        {
                                            Semaine.map((SemaineMap) =>
                                                <div id={SemaineMap} >
                                                    <h8 style={{marginLeft:'20px'}} >{SemaineMap}:</h8> 
                                                    <select  style={{textAlign:'center', marginLeft:'auto', marginRight:'auto', borderRadius: '5px', borderColor: 'lightgrey', marginLeft:'5px', height:'35px', marginTop:'10px'}}>
                                                        <option className='placeHolderSelect' selected disabled hidden value=''> Selectionnez Planning de la semaine</option>
                                                        {
                                                            TypesSorties.filter(TypesSortiesFilter => TypesSortiesFilter.IdIndex === 1 || TypesSortiesFilter.IdIndex === 3).map((TypesSortiesFilterMap) =>

                                                                <option value={TypesSortiesFilterMap.PrixMois}> {TypesSortiesFilterMap.Nom}</option>

                                                            )
                                                        }
                                                    </select>

                                                </div>
                                            )
                                        }
                                 

                                </div>
                                <h8>Sorties Week-end</h8>
                                <select class="form-control" onChange={e => setSortiesWE(Number(e.target.value))}>
                                    <option className='placeHolderSelect' selected disabled hidden style={{ color: 'green' }} value=''> Selectionnez votre sortie</option>
                                    {
                                        TypesSorties.filter(TypesSortiesFilter => TypesSortiesFilter.IdIndex === 2 || TypesSortiesFilter.IdIndex === 3).map((TypesSortiesFilterMap) =>
                                            <option className={TypesSortiesFilterMap.Nom} value={TypesSortiesFilterMap.PrixMois}> {TypesSortiesFilterMap.Nom} ({TypesSortiesFilterMap.PrixMois}€)</option>
                                        )
                                    }
                                    <option value=''>Pas de sorties</option>

                                </select>


                            </div>


                        </form>


                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ajoutez une remarque, problèmes de santées, allergie etc..."></textarea>

                        <div>

                            <hr />
                            <div style={{ float: 'left', fontWeight: 'bold', fontSize: '20px' }}>Total : </div>

                            <div style={{ float: 'right' }}>{pension + aditif }€</div>


                        </div>
                    </div>
                    <div class="modal-footer">

                        <BoutonEnvoyer Text='Enregistrer' />
                    </div>
                </div>
            </div >
        </div >

    )
}
export default ModalAjouterCheval; 