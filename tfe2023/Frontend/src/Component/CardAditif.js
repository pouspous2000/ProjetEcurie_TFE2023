import ModalModifPension from "./ModalModifPension";
import SweetAlert from "./SweetAlert";
import Swal from 'sweetalert2';
import '../CSS/Card.css';
import ModalModifAditif from "./ModalModifAditif";

function CardAditif ({ NomAditif, PrixAditif}){

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
              Swal.fire('Votre Aditif va être supprimé !', 'success')
            }
          })   
    }

    return (
        <div class="row">
            <div style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                <div class="card container " style={{ marginLeft: 'auto', marginRight:'auto', marginTop:'10px', backgroundColor: '#F5F7FA' }}>
                    <div class="card-body row justify-content-center shadow-0 border rounded-3" >
                        <div className="col-xl-10 col-lg-9 col-md-9 col-sm-9 col-7">
                            <h4>{NomAditif}</h4>
                           
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4    border-sm-start-none border-start border-warning ">
                            <div className="d-flex flex-row mb-1">
                                <h5 className="mb-1 me-1" style={{marginRight:'auto', marginLeft:'auto'}}>{PrixAditif}€/mois</h5>
                            </div>
                            <div  style={{marginRight:'auto', marginLeft:'auto'}}>
                                <button data-toggle="tooltip" data-placement="top" title="Modifier la formule" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalModifAditif" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}>
                                    <i style={{ marginLeft: '20px' }} class="bi bi-pencil modif" />
                                </button>
                                <ModalModifAditif NomAditif={NomAditif} PrixAditif={PrixAditif} />

                                <button data-toggle="tooltip" data-placement="top" title="Supprimer la pension" type="button" id={NomAditif} class="btn" style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: 'fit-content', fontSize: '2rem', marginRight: '5rem' }}  onClick={e =>supprimer(e.currentTarget.id)}>
                                    <i style={{ marginLeft: '20px' }} className="bi bi-trash3" />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardAditif;