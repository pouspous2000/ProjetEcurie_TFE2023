import TitreCheval from "./Component/TitreCheval"
import ContenuCheval from "./Component/ContenuCheval"



function Cheval() {
    let NomCheveaux = [
        { NomCheval: "Idem" },
        { NomCheval: "Opéra" },
        { NomCheval: "Aubade" }
    ]


    return (
        <>


            <div style={{ maxWidth: 'fitContent', marginLeft: '5vw', fontSize: "30px", color:'#384454' }}> Vos Chevaux</div>




            <div >
                <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ marginLeft:'auto', marginRight: "auto", marginTop: "4rem", width:'50%'}}>
                    {NomCheveaux.map((a, index) =>
                        <TitreCheval NomCheval={a.NomCheval} index={index} />
                    )}
                </ul>

                <div class="tab-content" id="myTabContent" style={{marginRight:'auto', marginLeft:'auto', width: '50%' }}>
                    {NomCheveaux.map((index) =>
                        <ContenuCheval NomCheval={index.NomCheval} />

                    )}
                    
                </div>
            </div>
        </>

    )
}

export default Cheval

