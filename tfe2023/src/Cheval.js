import TitreCheval from "./Component/TitreCheval"
import ContenuCheval from "./Component/ContenuCheval"
import Modal from "./Component/Modal"



function Cheval() {
    let NomCheveaux = [
        { NomCheval: "Idem" },
        { NomCheval: "Opéra" },
        { NomCheval: "Aubade" }
    ]


    return (
        <>

            <div style={{ width: 'fit-content', marginLeft: '3rem', fontSize: "30px", color: '#CD853F' }}> Vos Chevaux</div>


            <button data-toggle="tooltip" data-placement="top" title="Ajouter un cheval" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  style={{ backgroundColor: 'transparent', borderColor: 'transparent',  width: 'fit-content', float: 'right', fontSize: '3rem', marginRight: '5rem' }}>
                <i class="bi bi-plus-circle"></i>
            </button>
            <Modal />

            <div >
                <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ color:'',marginLeft: 'auto', marginRight: "auto", marginTop: "4rem", width: 'max-content' }}>
                    {NomCheveaux.map((a, index) =>
                        <TitreCheval NomCheval={a.NomCheval} index={index} />
                    )}
                </ul>

                <div class="tab-content" id="myTabContent" style={{ marginRight: 'auto', marginLeft: 'auto', width: '50%', color:'#736150'}}>
                    {NomCheveaux.map((index) =>
                        <ContenuCheval NomCheval={index.NomCheval} />

                    )}

                </div>
            </div>
        </>

    )
}

export default Cheval

