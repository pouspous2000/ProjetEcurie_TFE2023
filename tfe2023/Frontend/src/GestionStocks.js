import ContenuCheval from "./Component/ContenuCheval";
import TitreCheval from "./Component/TitreCheval";
import ContenuGesionDesStocks from "./Component/ContenuGestionDesStocks";


let MatièrePremière = ['Foin', 'Paille', 'Grannulé']

function GestionStocks() {
    return (
        <>
            <h1>GestionStocks</h1>
            <div >
                <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ color: '', marginLeft: 'auto', marginRight: "auto", marginTop: "4rem", width: 'max-content' }}>
                    {MatièrePremière.map((a, index) =>
                        <TitreCheval NomCheval={a} index={index} />
                    )}
                </ul>

                <div class="tab-content" id="myTabContent" style={{ marginRight: 'auto', marginLeft: 'auto', width: '70%', color: '#736150' }}>
                    {MatièrePremière.map((index) =>
                        <ContenuGesionDesStocks MatierePremiere={index}/>

                    )}
                </div>
            </div>

        </>
    )
}
export default GestionStocks; 