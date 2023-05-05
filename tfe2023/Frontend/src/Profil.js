import ContenuProfil from "./Component/ContenuProfil";
function ProfilClient() {

    return (
        <>
            <div style={{ width: 'fit-content', marginLeft: '3rem', fontSize: "30px", color: '#CD853F' }}> Votre Profil </div>

            <div >
                <ul class="nav nav-tabs" id="Tab" role="tablist" style={{ color: '', marginLeft: 'auto', marginRight: "auto", marginTop: "4rem", width: 'max-content' }}>
                    <li class="nav-item" role="presentation" >
                    <button style={{color: '#CD853F'}} class="nav-link" id='Info-tab'  data-bs-toggle="tab" data-bs-target='#Info' type="button" role="tab" aria-controls='Info' aria-selected="true" >Mes Infos</button>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent" style={{ marginRight: 'auto', marginLeft: 'auto', width: '50%', color: '#736150' }}>
                    <ContenuProfil />

                </div>
            </div>
        </>

    )
}
export default ProfilClient;