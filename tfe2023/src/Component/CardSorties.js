
import SweetAlert from "./SweetAlert";
import Swal from 'sweetalert2';
import '../CSS/Card.css';
import ModalModifSortie from "./ModalModifSortie";


function CardSorties({ Nom, PrixMois, PrixUnite, Index, DebutJ, DebutM, FinJ, FinM }) {

    function supprimer(e) {
        Swal.fire({
            title: '',
            text: 'Etes vous sur de vouloir supprimer :'+ e + '?',
            icon: 'question',
            showDenyButton: 'true',
            confirmButtonText: 'Oui',
            denyButtonText: 'Non',
          }).then((result) => {
        
            if (result.isConfirmed) {
              Swal.fire('','Votre sortie va être supprimé !','success' )
            }
          })   
    }

    return (
        <div class="row" >
            <div style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div class="card container " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', backgroundColor: '#F5F7FA' }}>
                    <div class="card-body row justify-content-center shadow-0 border rounded-3" >
                        <div className="col-xl-10 col-lg-9 col-md-9 col-sm-9 col-7">
                            <h4>{Nom}</h4>
                            <h5> Période : </h5>
                            <div>{Index}</div>
                            <h5 style={{marginTop:'4px'}}> Période de l'année : </h5>
                            {DebutJ === null ?
                                <div>Toute l'année </div> :
                                <div> Du {DebutJ}.{DebutM} au {FinJ}.{FinM}</div>
                            }
                        </div>


                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 border-sm-start-none border-start border-warning ">
                            <div className="d-flex flex-row align-items-center mb-1">
                                <h5 className="mb-1 me-1" style={{marginRight:'auto', marginLeft:'auto'}}>{PrixMois}€/mois</h5>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-1">
                                <h5 className="mb-1 me-1" style={{marginRight:'auto', marginLeft:'auto'}}>{PrixUnite}€/unité</h5>
                            </div>
                            <div style={{marginRight:'auto', marginLeft:'auto'}} >
                                <button data-toggle="tooltip" data-placement="top" title="Modifier la formule" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalModifSortie" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}>
                                    <i style={{ marginLeft: '30px' }} class="bi bi-pencil modif" />
                                </button>
                               <ModalModifSortie Nom={Nom} PrixMois={PrixMois} PrixUnite={PrixUnite} Index={Index} DebutJ={DebutJ} DebutM={DebutM} FinJ={FinJ} FinM={FinM}/>
                                <button data-toggle="tooltip" data-placement="top" title="Supprimer la pension" type="button" id={Nom} class="btn" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem' }} onClick={e => supprimer(e.currentTarget.id)}>
                                    <i style={{ marginLeft: '30px' }} className="bi bi-trash3 poubelle" />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardSorties;