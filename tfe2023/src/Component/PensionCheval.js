
import { useState } from 'react';
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


    let ChevalPension = [
        { Id: 1, NomCheval: "Idem", Pension: "Pension Total", SortiesSM: "Non", SortiesWE: "Oui", SupFoin: "Oui", SupGrain: "Non" },
        { Id: 2, NomCheval: "Opéra", Pension: "Pension Total", SortiesSM: "Non", SortiesWE: "Oui", SupFoin: "Oui", SupGrain: "Non" },
        { Id: 3, NomCheval: "Aubade", Pension: "Pension Partiel", SortiesSM: "Non", SortiesWE: "Oui", SupFoin: "Oui", SupGrain: "Non" }
    ]
    const [changementPrix, setChangementPrix] = useState('');


    function changePrix(e) {
        setChangementPrix(e.target.value);
    }


    return (

        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Pension</th>
                    {profilUtilisateur === "Client" ?
                        <td>
                            <select id={`${NomCheval.NomCheval}formulePension`} className='select' onChange={changePrix}>
                                {
                                    ChevalPension.filter(chevalPensionIndex => chevalPensionIndex.NomCheval === NomCheval.NomCheval).map((chevalPensionFilterIndex) =>
                                        <>
                                            <option value={chevalPensionFilterIndex.Pension}>{chevalPensionFilterIndex.Pension}</option>
                                            {
                                                TypesPensions.filter(typesPensionsIndex => typesPensionsIndex.Pension !== chevalPensionFilterIndex.Pension).map(filterTypePension => (
                                                    <option value={filterTypePension.Pension}>{filterTypePension.Pension}</option>
                                                ))
                                            }

                                        </>
                                    )
                                }
                            </select>



                        </td>
                        :
                        <td>
                            {ChevalPension.filter(chevalPensionIndex => chevalPensionIndex.NomCheval === NomCheval.NomCheval).map((chevalPensionFilterIndex) =>
                                chevalPensionFilterIndex.Pension
                            )}
                        </td>


                    }
                    <td>
                        {TypesPensions.filter(TypePensionFiltre => changementPrix === TypePensionFiltre.Pension).map((TypePensionFiltreIndex) =>
                            '+ ' + TypePensionFiltreIndex.Prix + '€ '
                        )}

                    </td>

                </tr>


                {TypesAditifs.map((typesAditifsIndex) =>
                    <>



                        <tr>

                            <th scope="row">{typesAditifsIndex.Nom}</th>


                            {ChevalPension.filter(chevalPensionIndex => chevalPensionIndex.NomCheval === NomCheval.NomCheval).map((chevalPensionFilterIndex) =>
                                <>


                                    <td>
                                        <select>
                                            <option value='oui'>Oui</option>
                                        </select>

                                    </td>
                                </>



                            )}


                            <td> + {typesAditifsIndex.Prix}€</td>

                        </tr>
                    </>
                )}
                <tr>
                    <th>Total : </th>
                    <td></td>
                    <td>
                        {TypesPensions.filter(TypePensionFiltre => changementPrix === TypePensionFiltre.Pension).map((TypePensionFiltreIndex) =>
                            TypePensionFiltreIndex.Prix + '€ '
                        )}

                    </td>
                </tr>


            </tbody>
           

        </table>
    )
}
export default PensionCheval; 