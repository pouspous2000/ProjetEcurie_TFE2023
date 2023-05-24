
import ModalAjouterPension from "./Component/ModalAjouterPension";
import ModalAjouterAditif from "./Component/ModalAjouterAditif";
import ModalAjouterSortie from "./Component/ModalAjouterSortie";

import CardPension from "./Component/CardPension";
import CardAditif from "./Component/CardAditif";
import CardSorties from "./Component/CardSorties";

function ParametresAdmin() {
    let TypesPensions = [
        { Pension: "Pension Total", Prix: "500", Description: "La pension total comprend, 3 repas de grannulé par jour, le box fait tous les jours ainsi qu'une ration de foin matin et soir" },
        { Pension: "Pension Partiel", Prix: "400", Description: "La pension partiel comprend, 3 repas de grannulé par jour, le box fait un jour sur deux ansi qu'une ration de foin le soir" }
    ]

    let TypesAditifs = [

        { Type: "SupFoin", Nom: "Supplément foin", Prix: '50' },
        { Type: "SupGrain", Nom: "Grannulés Personnels", Prix: '50' },
        { Type: "Copeau", Nom: "Copeau", Prix: '50' }
    ]

    let TypesSorties = [
        { Id: '1', Nom: 'Marcheur', PrixMois: '50', PrixUnite: '2.50', DebutJ: null, DebutM: null,  FinJ: null, FinM:null, Index: 1 },
        { Id: '2', Nom: 'Paddock', PrixMois: '50', PrixUnite: '2.50', DebutJ: null,  DebutM: null, FinJ: null, FinM:null, Index: 3 },
        { Id: '3', Nom: 'Prairie', PrixMois: '50', PrixUnite: '2.50', DebutJ: '01',  DebutM: '05', FinJ: '01', FinM:'09', Index: 3 },
        { Id: '4', Nom: 'Montes', PrixMois: '500', PrixUnite: '30', DebutJ: null,  DebutM: null,  FinJ: null, FinM:null, Index: 3 },
        { Id: '5', Nom: 'Sur Mesure', PrixMois: '70', PrixUnite: '', DebutJ: null,  DebutM: null,  FinJ: null, FinM:null, Index: 3 }

    ]

    let IdSorties = [
        { Nom: 'Sortie Semaine', Index: 1 },
        { Nom: "Sortie Week-End", Index: 2 },
        { Nom: 'Sortie Semaine & Week-end', Index: 3 }
    ]

    return (
        <>
            <h2 style={{width: 'fit-content', marginLeft: '3rem', fontSize: "30px", color: '#CD853F' }}> Configurations </h2>

            {/* ________________________Pensions________________________ */}

            <h3 style={{ margin: "35px" }}>  Pensions
                <button data-toggle="tooltip" data-placement="top" title="Ajouter une pension" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalAjouterPension" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}>
                    <i class="bi bi-plus-circle" />
                </button>

            </h3>
            <ModalAjouterPension>

            {
                TypesPensions.map((TypesPensionsMap) =>
                    <CardPension NomPension={TypesPensionsMap.Pension} PrixPension={TypesPensionsMap.Prix} DescriptionPension={TypesPensionsMap.Description} />
                )
            }

            {/* ________________________Sorties________________________ */}

            <h3 style={{ margin: "35px" }}>  Sorties
                <button data-toggle="tooltip" data-placement="top" title="Ajouter une sortie" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalAjouterSortie" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}>
                    <i class="bi bi-plus-circle" />
                </button>

            </h3>
            <ModalAjouterSortie />
            {
                TypesSorties.map((TypesSortiesMap) =>
                    <>
                        {
                            IdSorties.filter(IdSortiesFilter => IdSortiesFilter.Index === TypesSortiesMap.Index).map((IdSortiesFilterMap) =>
                                <CardSorties key={Math.random().toString()} Nom={TypesSortiesMap.Nom} PrixMois={TypesSortiesMap.PrixMois} PrixUnite={TypesSortiesMap.PrixUnite} Index={IdSortiesFilterMap.Nom} DebutJ={TypesSortiesMap.DebutJ} DebutM={TypesSortiesMap.DebutM} FinJ={TypesSortiesMap.FinJ} FinM={TypesSortiesMap.FinM} />
                            )
                        }
                    </>
                )
            }
            {/* ________________________Aditifs________________________ */}
            <h3 style={{ margin: "35px" }}>  Aditif
                <button data-toggle="tooltip" data-placement="top" title="Ajouter un aditifs" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalAjouterAditif" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}>
                    <i class="bi bi-plus-circle" />
                </button>

            </h3>
            <ModalAjouterAditif />

            {
                TypesAditifs.map((TypesAditifMap) =>
                    <CardAditif NomAditif={TypesAditifMap.Nom} PrixAditif={TypesAditifMap.Prix} />
                )
            }

        </>
    )
}

export default ParametresAdmin;