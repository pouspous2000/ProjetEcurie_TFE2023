
import BoutonEnvoyer from "./ButtonEnvoyer";


function ModalModifPension({ NomPension, PrixPension, DescriptionPension }) {
console.log(NomPension)


    return (
     
       
        <div style={{ color: '#271503' }} class="modal fade" id="modalModifPension" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                            <input type="text" class="form-control" value={NomPension} />
                        </div>
                        <div class="form-group" style={{marginTop:'20px', marginBottom:'20px'}}>
                            <h5>Prix de la pension <p style={{ fontStyle: 'italic', float: 'right', color: 'lightgray', marginRight:"255px"}}>(En €)</p> </h5>
                            <input required type="number"  min="10" max="100" class="form-control"  style={{width:'100px'}} defaultValue={PrixPension} />
                        </div>
                        <h5>Description de la pension </h5>
                        <textarea class="form-control" rows="3" defaultValue={DescriptionPension}></textarea>

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
export default ModalModifPension; 