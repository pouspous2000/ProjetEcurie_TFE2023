import BoutonEnvoyer from "./ButtonEnvoyer";
function ModalModifAditif({NomAditif, PrixAditif}) {

    return (
        <div style={{ color: '#271503' }} class="modal fade" id="modalModifAditif" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLongTitle" style={{ color: '#271503', textAlign:'center' }}>Ajouter un nouvel aditif</h3>
                    <i data-bs-dismiss="modal" style={{ fontSize: '30px' }} class="bi bi-x-circle-fill"></i>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group" style={{marginTop:'20px', marginBottom:'20px'}}>
                            <h5>Nom de l'aditif</h5>
                            <input required type="text" class="form-control" id="exampleFormControlInput1" value={NomAditif} />
                        </div>
                        <div class="form-group" style={{marginTop:'20px', marginBottom:'20px'}}>
                            <h5>Prix de l'aditif au mois <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginRight:"255px"}}>(En €)</p> </h5>
                            <input required type="number"  min="10" max="100" class="form-control" id="exampleFormControlInput1" style={{width:'100px'}} value={PrixAditif} />
                        </div>
                        
                        
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
export default ModalModifAditif; 