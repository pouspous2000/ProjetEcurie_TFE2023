
import { useEffect, useState } from 'react';
import '../CSS/ModalAjouterCheval.css';
function PensionCheval(NomCheval) {

    let profilUtilisateur = "Client"

    let Semaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
    let WeekEnd = ['Samedi', 'Dimanche']

    // const AjouterAditif = e => {
    //     if (e.target.checked) {
    //         setAditif(Number(aditif) + Number(e.target.value))
    //     } else {
    //         setAditif(Number(aditif) - Number(e.target.value))
    //     }
    // };
    let [displaySemaine, setDisplaySemaine] = useState('disparait');
    let [displayWeekEnd, setDisplayWeekEnd] = useState('disparait');

    const AffichageSemaine = e => {

        if (displaySemaine === 'disparait' && e.target.value === '70') {
            setDisplaySemaine('apparait')

        }
        else {
            setDisplaySemaine('disparait')

        }
        setSortiesSM(Number(e.target.value))
    }
    const AffichageWeekEnd = e => {

        if (displayWeekEnd === 'disparait' && e.target.value === '70') {
            setDisplayWeekEnd('apparait')

        }
        else {
            setDisplayWeekEnd('disparait')

        }
        setSortiesWE(Number(e.target.value))
    }
    const [sortiesSM, setSortiesSM] = useState(0);
    const [sortiesWE, setSortiesWE] = useState(0);

    const [pension, setPension] = useState(0);
    const [aditif, setAditif] = useState()

   

    



    let factureSorties = [
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomSortie: 'Paddock', PrixSortie: 50, Période: 'Semaine Et Week-End' },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomSortie: 'Marcheur', PrixSortie: 50, Période:'Semaine' },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomSortie: 'Paddock', PrixSortie: 50, Période:'Week-End' },

    ]

    let facturePension = [
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomPension: 'Pension Complète', PrixPension: 500 },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomPension:'Pension Partielle', PrixPension: 500},
    ]

    let facture = [
        { idClient: 1, GSMClient: '0470117199', MailClient: 'Bonnet@gmail.com', NomClient: 'Bonnet', PrénomClient: 'Emilie', Adresse: 'Rue du Chaumont 1A, 1460 Ittre', IdFacture: 22, Mois: "Janvier", Année: "2023", Status: true },
    ]

    let Client = [
        { idClient: 1, GSMClient: '0470117199', MailClient: 'Bonnet@gmail.com', NomClient: 'Bonnet', PrénomClient: 'Emilie', Adresse: 'Rue du Chaumont 1A, 1460 Ittre' }

    ]

    let Pension = [
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypePension: '01P', NomPension: 'Pension Complète', PrixPension: 500, Mois: 'Avril', Année: '2023' },
        { IdCheval: '2C', NomCheval: 'Idem', IdTypePension: '02P', NomPension: 'Pension Partielle', PrixPension: 400, Mois: 'Avril', Année: '2023' },
        { IdCheval: '3C', NomCheval: 'Opéra', IdTypePension: '02P', NomPension: 'Pension Partielle', PrixPension: 400, Mois: 'Avril', Année: '2023' },
        { IdCheval: '3C', NomCheval: 'Opéra', IdTypePension: '02P', NomPension: 'Pension Partielle', PrixPension: 400, Mois: 'Mars', Année: '2023' },
    ]



    let TypesPension = [
        { IdTypePension: '01P', NomPension: 'Pension Complète', PrixPension: 500 },
        { IdTypePension: '02P', NomPension: 'Pension Partielle', PrixPension: 400 },
    ]

    let Aditif = [
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '01A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '03A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '02A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Opéra', IdTypeAditif: '01A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Opéra', IdTypeAditif: '02A', Mois: 'Mars', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Opéra', IdTypeAditif: '03A', Mois: 'Avril', Année: '2022' },
        { IdCheval: '1C', NomCheval: 'Idem', IdTypeAditif: '03A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Idem', IdTypeAditif: '02A', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Idem', IdTypeAditif: '03A', Mois: 'Mars', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Idem', IdTypeAditif: '02A', Mois: 'Avril', Année: '2021' },
    ]

    let TypeAditif = [
        { IdTypeAditif: '01A', NomAditif: 'Supplément foin', PrixAditif: 50 },
        { IdTypeAditif: '02A', NomAditif: 'Grannulé propre', PrixAditif: -50 },
        { IdTypeAditif: '03A', NomAditif: 'Copeau', PrixAditif: 30 },
    ]

    let Sorties = [
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '01S', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Idem', IdTypeAditif: '01S', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '01S', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '02S', Mois: 'Avril', Année: '2023' },
        { IdCheval: '1C', NomCheval: 'Aubade', IdTypeAditif: '03S', Mois: 'Mars', Année: '2022' },
    ]
    let TypesSorties = [
        { IdTypesSorties: '01S', Nom: 'Paddock', Prix: 50, IdPériode: '01P'},
        { IdTypesSorties: '02S', Nom: 'Marcheur', Prix: -50, IdPériode: 'O3P'},
        { IdTypesSorties: '02S', Nom: 'Prairie', Prix: -50, IdPériode: 'O2P'},
        { IdTypesSorties: '03S', Nom: 'Monte', Prix: 30, IdPériode: '03P'},
    ]

    let TypePeriode = [
        { IdPériode: '01P', NomPériode: 'Semaine et Week-end' },
        { IdPériode: '02P', NomPériode: 'Week-End' },
        { IdPériode: '03P', NomPériode: 'Semaine' },
    ]

    // Peut on stocker en harcoder les Types de Périodes ? 

    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
   let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Semptembre", "Octobre", "Novembre", " Décembre"]

    const monthName = mois[month]
    const aditifCheval = Aditif.filter(aditif => aditif.NomCheval === NomCheval.NomCheval && year === Number(aditif.Année) && monthName === aditif.Mois);

   

    useEffect(() => {
        const pension = document.getElementById(`${NomCheval.NomCheval}formulePension`);
        if (pension) {
            setPension(Number(pension.value));
        }
        const totalAditif = aditifCheval.reduce((somme, valeurActuelle) => {
            const SommeAditif = TypeAditif.find(TypeAditifFind => TypeAditifFind.IdTypeAditif === valeurActuelle.IdTypeAditif);
            return somme + SommeAditif.PrixAditif;
          }, 0);
        setAditif(totalAditif)

       
    },  [aditifCheval, TypeAditif]);

    return (
        <>
            <h5 style={{ marginTop: '20px' }}> Choix des pensions </h5>
            <table class="table" style={{ color: '#736150' }}>
                <tbody>
                    {profilUtilisateur === "Client" ?

                        <>
                            {/* choix pension cheval Ok affichage + Prix  */}
                            <tr style={{display: 'flex', flexDirection: 'column'}} >
                                <h8 >Pension </h8>
                                <td>
                                    <select style={{ textAlign: 'center', borderRadius: '5px', borderColor: 'lightgrey', height: '35px',width:'100%', marginTop: '10px' }} id={`${NomCheval.NomCheval}formulePension`} onChange={e => setPension(Number(e.target.value))}>

                                        {
                                            Pension.filter(PensionIndex => PensionIndex.NomCheval === NomCheval.NomCheval && year === Number(PensionIndex.Année) && monthName === PensionIndex.Mois).map((PensionFilterIndex) =>
                                                <>
                                                    <option value={PensionFilterIndex.PrixPension}>{PensionFilterIndex.NomPension}</option>
                                                    {
                                                        TypesPension.filter(typesPensionsIndex => typesPensionsIndex.IdTypePension !== PensionFilterIndex.IdTypePension).map(filterTypePension => (
                                                            <option value={filterTypePension.PrixPension}>{filterTypePension.NomPension}</option>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>

                            {/* choix aditifs OK + Coché au chargement */}
                            <h5 style={{ marginTop: '20px' }}> Choix des aditifs </h5>
                            <tr>
                                <td>
                                    {
                                        TypeAditif.map((typeAditifIndex) => 
                                            <div>
                                                <input  checked={aditifCheval.some(a => a.IdTypeAditif === typeAditifIndex.IdTypeAditif)} type="checkbox" value={typeAditifIndex.PrixAditif} id={typeAditifIndex.NomAditif} name={typeAditifIndex.NomAditif} />
                                                <label style={{marginLeft:'10px'}}htmlFor={typeAditifIndex.IdTypeAditif}>{typeAditifIndex.NomAditif} ({typeAditifIndex.PrixAditif}€)</label>
                                            </div>
                                        )
                                    }
                                </td>
                            </tr>

                            {/* choix sorties semaines */}
                            <tr>
                                <td>
                                    <div>
                                        <h5 style={{ marginTop: '20px' }}> Choix des sorties </h5>

                                        <h8>Sorties Semaine</h8>

                                        <select style={{ textAlign: 'center', borderRadius: '5px', borderColor: 'lightgrey', height: '35px',width:'100%', marginTop: '10px' }} onChange={AffichageSemaine}>
                                            <option className='placeHolderSelect' selected disabled hidden value=''> Selectionnez votre sortie</option>
                                            {
                                                Sorties.filter(TypesSortiesFilter =>PensionIndex.NomCheval === NomCheval.NomCheval && year === Number(PensionIndex.Année) && monthName === PensionIndex.Mois && TypesSortiesFilter.IdTypesSorties === 1 || TypesSortiesFilter.IdIndex === 3).map((TypesSortiesFilterMap) =>
                                                    <option value={TypesSortiesFilterMap.PrixMois}> {TypesSortiesFilterMap.Nom} ({TypesSortiesFilterMap.PrixMois}€)</option>
                                                )
                                            }
                                            <option value=''>Pas de sorties</option>

                                        </select>

                                        {/* si option 'sur mesure est choisi' */}

                                        <div id={displaySemaine} style={{ backgroundColor: '#F5F5DC', maginLeft: '20px' }}>
                                            <h6 style={{ marginLeft: '5px' }}>Composez votre semaine</h6>
                                            {
                                                Semaine.map((SemaineMap) =>
                                                    <div id={SemaineMap} >
                                                        <h8 style={{ marginLeft: '20px' }} >{SemaineMap}:</h8>
                                                        <select style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', borderColor: 'lightgrey', marginLeft: '5px', height: '35px', marginTop: '10px' }}>
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


                                        <h8 style={{ padding: '10px' }}>Sorties Week-end</h8>
                                        <select  onChange={AffichageWeekEnd} style={{ textAlign: 'center', borderRadius: '5px', borderColor: 'lightgrey', height: '35px',width:'100%', marginTop: '10px' }}>
                                            <option className='placeHolderSelect' selected disabled hidden style={{ color: 'green' }} value=''> Selectionnez votre sortie</option>
                                            {
                                                TypesSorties.filter(TypesSortiesFilter => TypesSortiesFilter.IdIndex === 2 || TypesSortiesFilter.IdIndex === 3).map((TypesSortiesFilterMap) =>
                                                    <option className={TypesSortiesFilterMap.Nom} value={TypesSortiesFilterMap.PrixMois}> {TypesSortiesFilterMap.Nom} ({TypesSortiesFilterMap.PrixMois}€)</option>
                                                )
                                            }
                                            <option value=''>Pas de sorties</option>

                                        </select>

                                        <div id={displayWeekEnd} style={{ backgroundColor: '#F5F5DC', maginLeft: '20px' }}>
                                            <h6 style={{ marginLeft: '5px' }}>Composez votre week-end</h6>
                                            {
                                                WeekEnd.map((WeekEndMap) =>
                                                    <div id={WeekEndMap} >
                                                        <h8 style={{ marginLeft: '20px' }} >{WeekEndMap}:</h8>
                                                        <select style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', borderRadius: '5px', borderColor: 'lightgrey', marginLeft: '5px', height: '35px', marginTop: '10px' }}>
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



                                    </div>
                                </td>
                            </tr>


                            <div style={{ position: '-webkit-sticky', top: '0', position: 'sticky' }}>
                                <tr >

                                    <th>Total :  </th>
                                    <tr></tr>
                                    <td style={{ float: 'right' }}>
                                        {Number(pension) + Number(aditif) + Number(sortiesSM) + Number(sortiesWE)}€
                                    </td>
                                </tr>
                            </div>

                        </>
                        :
                        <div>Coucou </div>
                    }

                </tbody>


            </table >
        </>
    )

}
export default PensionCheval; 