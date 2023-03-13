
import { useEffect, useState } from 'react';
function PensionCheval(NomCheval) {

    let profilUtilisateur = "Client"

    let TypesPensions = [
        { Pension: "Pension Total", Prix: "500" },
        { Pension: "Pension Partiel", Prix: "400" }
    ]

    let TypesAditifs = [
        { Type: "SortiesSM", Nom: "Sortie Semaine", Prix: '50', Index: 1 },
        { Type: "SortiesWE", Nom: "Sortie Week-End", Prix: '50', Index: 2 },
        { Type: "SupFoin", Nom: "Supplément foin", Prix: '50', Index: 3 },
        { Type: "SupGrain", Nom: "Grannulés Personnels", Prix: '50', Index: 4 }
    ]
    let TypesSorties = [
        { Type: 'Marcheur', Id: '1' },
        { Type: 'Paddock', Id: '2' },
        { Type: 'Marcheur', Id: '3' }
    ]
    let listTypesAditifs = ["SortiesSM", "SortiesWE", "SupFoin", "SupGrain"]


    const [test, setTest] = useState('')

    let ChevalPension = [
        { NomCheval: "Idem", Pension: "Pension Total", SortiesSM: "Non", SortiesWE: "Oui", TypeSortieSM: '1', SupFoin: "Oui", SupGrain: "Non", TotalPension: "500" },
        { NomCheval: "Opéra", Pension: "Pension Total", SortiesSM: "Non", SortiesWE: "Oui", TypeSortieSM: '2', SupFoin: "Oui", SupGrain: "Non", TotalPension: "500" },
        { NomCheval: "Aubade", Pension: "Pension Partiel", SortiesSM: "Non", SortiesWE: "Oui", TypeSortieSM: '3', SupFoin: "Oui", SupGrain: "Non", TotalPension: "500" }
    ]
    const [pension, setPension] = useState(500);
    const [aditif, setAditif] = useState('')
    const [changementPrix, setChangementPrix] = useState('');

    function RemplirPension(e) {
        // setPension(10)
   
    }


    useEffect(() => {
        RemplirPension();
    }, [])


    return (
        <>
            <h5 style={{ marginTop: '20px' }}> Choix des pensions </h5>
            <table class="table" style={{color:'#736150'}}>
                <tbody>
                {profilUtilisateur === "Client" ?
                   
                        <>
                            <tr>
                            <td scope="row">Pension </td>
                                <td>
                                    <select className="form-control" style={{ borderRadius: "2px" }} id={`${NomCheval.NomCheval}formulePension`} onLoad={e => RemplirPension(e.target.value)} onChange={e => setPension(Number(e.target.value))}>
                                        {
                                            ChevalPension.filter(chevalPensionIndex => chevalPensionIndex.NomCheval === NomCheval.NomCheval).map((chevalPensionFilterIndex) =>
                                                <>
                                                    {
                                                        TypesPensions.filter(typesPensionsIndex => typesPensionsIndex.Pension === chevalPensionFilterIndex.Pension).map(filterTypePension => (
                                                            <option value={filterTypePension.Prix}>{filterTypePension.Pension}</option>
                                                        ))
                                                    }
                                                    {
                                                        TypesPensions.filter(typesPensionsIndex => typesPensionsIndex.Pension !== chevalPensionFilterIndex.Pension).map(filterTypePension => (
                                                            <option value={filterTypePension.Prix}>{filterTypePension.Pension}</option>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>


                            <h5 style={{ marginTop: '20px'}}> Choix des aditifs </h5>

                            <tr>
                                <td>
                                        {
                                            listTypesAditifs.map((listTypesAditifsMap)=>
                                            <>
                                            {
                                                ChevalPension.filter(chevalPensionIndex => chevalPensionIndex.NomCheval === NomCheval.NomCheval).map((chevalPensionFilterIndex) =>
                                                <div>Coucou </div>
                                                )
                                            }
                                            </>
                                            )
                                        }
                                </td>
                            </tr>



                            <tr>
                                <th>Total :  </th>
                                <tr></tr>
                                <td style={{ float: 'right' }}>
                                    {pension}€

                                </td>
                            </tr>

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