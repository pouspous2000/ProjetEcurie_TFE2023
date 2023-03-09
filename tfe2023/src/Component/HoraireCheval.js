import '../CSS/HoraireCheval.css';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function HoraireCheval({ NomCheval }) {

    let ChevalPension = [
        { NomCheval: "Idem", Pension: "Pension Total", SortiesSM: "Oui", SortiesWE: "Oui", TypeSortieSM: '1', SupFoin: "Oui", SupGrain: "Non", Groupe: 1 },
        { NomCheval: "Opéra", Pension: "Pension Total", SortiesSM: "Non", SortiesWE: "Oui", TypeSortieSM: '2', SupFoin: "Oui", SupGrain: "Non", Groupe: 2 },
        { NomCheval: "Aubade", Pension: "Pension Partiel", SortiesSM: "Oui", SortiesWE: "Oui", TypeSortieSM: '3', SupFoin: "Oui", SupGrain: "Non", Groupe: 3 }
    ]

    let PlanningCheval = [
        { NomCheval: "Idem", Lundi: 'Marcheur', Mardi: 'Marcheur', Mercredi: 'Marcheur', Jeudi: 'Marcheur', Vendredi: 'Marcheur', Samedi: 'Paddock', Dimanche: 'Paddock' },
        { NomCheval: "Opéra", Lundi: '/', Mardi: '/', Mercredi: '/', Jeudi: '/', Vendredi: '/', Samedi: 'Paddock', Dimanche: 'Paddock' },
        { NomCheval: "Aubade", Lundi: 'Marcheur', Mardi: 'Paddock', Mercredi: 'Marcheur', Jeudi: 'Paddock', Vendredi: 'Marcheur', Samedi: '/', Dimanche: '/' }
    ]
    let TypesSorties = [
        { Nom: 'Marcheur', Id: '1', },
        { Nom: 'Paddock', Id: '2', },
        { Nom: 'Both', Id: '3', }
    ]


    let profilUtilisateur = "Client"
    return (

        <Table style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '10px' }}>
            <Tr>
                <Td className="horaireJour">Lundi</Td>
                <Td className="horaireJour">Mardi</Td>
                <Td className="horaireJour">Mercredi</Td>
                <Td className="horaireJour">Jeudi</Td>
                <Td className="horaireJour">Vendredi</Td>
                <Td className="horaireJour">Samedi</Td>
                <Td className="horaireJour">Dimanche</Td>
            </Tr>

            {profilUtilisateur === "Client" ?
                <>
                    {
                        PlanningCheval.filter(filterPlanningCheval => filterPlanningCheval.NomCheval === NomCheval).map((mapPlanningCheval) =>
                            <>
                                {
                                    ChevalPension.filter(filterChevalPension => filterChevalPension.NomCheval === NomCheval).map((mapChevalPension) =>
                                        <>
                                            {
                                                mapChevalPension.TypeSortieSM === '3' ?
                                                    <Tr>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Lundi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Mardi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Mercredi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Jeudi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Vendredi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Samedi}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                        <Td className="horaireJour">
                                                            <select  class="form-control">
                                                                <option>
                                                                    {mapPlanningCheval.Dimanche}
                                                                </option>
                                                            </select>
                                                        </Td>
                                                    </Tr>
                                                    :
                                                    <Tr>
                                                        <Td className="horaireJour">{mapPlanningCheval.Lundi}</Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Mardi} </Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Mercredi} </Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Jeudi} </Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Vendredi} </Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Samedi} </Td>
                                                        <Td className="horaireJour">{mapPlanningCheval.Dimanche} </Td>
                                                    </Tr>

                                            }



                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </>
                :
                <>
                    {
                        PlanningCheval.filter(filterPlanningCheval => filterPlanningCheval.NomCheval === NomCheval).map((mapPlanningCheval) =>
                            <Tr>
                                <Td className="horaireJour">{mapPlanningCheval.Lundi}</Td>
                                <Td className="horaireJour">{mapPlanningCheval.Mardi} </Td>
                                <Td className="horaireJour">{mapPlanningCheval.Mercredi} </Td>
                                <Td className="horaireJour">{mapPlanningCheval.Jeudi} </Td>
                                <Td className="horaireJour">{mapPlanningCheval.Vendredi} </Td>
                                <Td className="horaireJour">{mapPlanningCheval.Samedi} </Td>
                                <Td className="horaireJour">{mapPlanningCheval.Dimanche} </Td>
                            </Tr>
                        )
                    }
                </>
            }


        </Table>
    )
}
export default HoraireCheval;