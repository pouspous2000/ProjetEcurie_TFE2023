import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import jsPDF from 'jspdf';
import logo from '../Img/logo.png'
import { useState } from 'react';

function MesFactures() {
    let clientId = 1
    // let [total, setTotal] = useState(0)
    let [aditif, setAditif] = useState(0)
    let [pension, setPension] = useState(0)
    let [sorties, setSorties] = useState(0)
    let [position, setPosition] = useState(290)

    const handleClick = (item) => {

        const doc = new jsPDF('p', 'pt', 'letter');

        // Set the invoice title and number
        doc.setFontSize(30);
        doc.text('Facture', 100, 50);
        doc.addImage(logo, 450, 30, 100, 100)


        // Add the invoice date
        doc.setFontSize(12);
        doc.text(`${item.factureMap.NomClient} ${item.factureMap.PrénomClient}`, 50, 100);
        doc.text(`${item.factureMap.Adresse}`, 50, 120);
        doc.text(`${item.factureMap.GSMClient}`, 50, 140);
        doc.text(`${item.factureMap.MailClient}`, 50, 160);

        // 
        doc.setFontSize(12);
        doc.text(`Facture Numéro : ${item.factureMap.IdFacture}`, 50, 200);
        doc.text(`Période : ${item.factureMap.Mois} ${item.factureMap.Année}`, 50, 220)
        doc.text(`Cheval : ${item.factureMap.NomCheval}`, 50, 240)

        // Add the invoice items
        let startY = 290;

        doc.setFontSize(15);
        doc.text('Services', 100, startY);
        doc.text('Prix', 500, startY);
        doc.setFontSize(13);

        let lastY = startY;
        let total = 0
        facturePension
            .filter(
                (facturePensionFilter) =>
                    facturePensionFilter.Année === item.factureMap.Année &&
                    facturePensionFilter.Mois === item.factureMap.Mois &&
                    facturePensionFilter.idClient === item.factureMap.idClient
            )
            .forEach((facturePensionMap, index) => {
                const itemY = lastY + 20;
                doc.text(`Pension : ${facturePensionMap.NomPension}`, 100, itemY);
                doc.text(`${facturePensionMap.PrixPension}€`, 500, itemY);
                lastY = itemY;
                total += facturePensionMap.PrixPension
            });

        factureAditif
            .filter(
                (factureAditifFilter) =>
                    factureAditifFilter.Année === item.factureMap.Année &&
                    factureAditifFilter.Mois === item.factureMap.Mois &&
                    factureAditifFilter.idClient === item.factureMap.idClient
            )
            .forEach((factureAditifMap, index) => {
                const itemY = lastY + 20;
                doc.text(`Aditifs : ${factureAditifMap.NomAditif}`, 100, itemY)
                doc.text(`${factureAditifMap.PrixAditif}€`, 500, itemY)
                lastY = itemY;
                total += factureAditifMap.PrixAditif

            });

        factureSorties
            .filter(
                factureSortiesFilter => 
                    factureSortiesFilter.Année === item.factureMap.Année && 
                    factureSortiesFilter.Mois === item.factureMap.Mois &&
                    factureSortiesFilter.idClient === item.factureMap.idClient
            )
            .forEach((factureSortiesMap, index) => {
                const itemY = lastY + 20;
                doc.text(`${factureSortiesMap.Période} : ${factureSortiesMap.NomSortie}`, 100, itemY)
                doc.text(`${factureSortiesMap.PrixSortie}€`, 500, itemY)
                total += factureSortiesMap.PrixSortie
                lastY = itemY;

        })

        // Add the invoice total
        const itemY = lastY + 30;
        doc.setFontSize(14);
        doc.text(`Total : ${total} € `, 450, itemY);

        // Save the PDF
        doc.save(`Facture_${item.factureMap.idClient}_${item.factureMap.Mois}_${item.factureMap.Année}.pdf`)
    };

    // Appel de plusieurs DB 
    let factureAditif = [
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomAditif: 'Copeau', PrixAditif: 30 },
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomAditif: 'Grannulé propre', PrixAditif: -50 },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomAditif: 'Grannulé propre', PrixAditif: -50 },
    ]

    let factureSorties = [
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomSortie: 'Paddock', PrixSortie: 50, Période: 'Semaine Et Week-End' },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomSortie: 'Marcheur', PrixSortie: 50, Période:'Semaine' },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomSortie: 'Paddock', PrixSortie: 50, Période:'Week-End' },

    ]

    let facturePension = [
        { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023", NomCheval: 'Idem', NomPension: 'Pension Complète', PrixPension: 500 },
        // { idClient: 1, IdFacture: 23, Mois: "Janvier", Année: "2023",  NomCheval: 'Opéra', NomPension:'Pension Partielle', PrixPension: 500},
    ]

    let facture = [
        { idClient: 1, GSMClient: '0470117199', MailClient: 'Bonnet@gmail.com', NomClient: 'Bonnet', PrénomClient: 'Emilie', Adresse: 'Rue du Chaumont 1A, 1460 Ittre', IdFacture: 22, Mois: "Janvier", Année: "2023", Status: true },
    ]

    let Client = [
        { idClient: 1, GSMClient: '0470117199', MailClient: 'Bonnet@gmail.com', NomClient: 'Bonnet', PrénomClient: 'Emilie', Adresse: 'Rue du Chaumont 1A, 1460 Ittre' }

    ]

    let Aditif = [
        { IdCheval: '1C', IdTypeAditif: '01A', Mois: 'Janvier', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '03A', Mois: 'Janvier', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '02A', Mois: 'Janvier', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '01A', Mois: 'Février', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '01A', Mois: 'Mars', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '02A', Mois: 'Mars', Année: '2021' },
        { IdCheval: '1C', IdTypeAditif: '03A', Mois: 'Mars', Année: '2022' },
    ]

    let TypeAditif = [
        { IdTypeAditif: '01A', NomAditif: 'Supplément foin', PrixAditif: 50 },
        { IdTypeAditif: '02A', NomAditif: 'Grannulé propre', PrixAditif: -50 },
        { IdTypeAditif: '03A', NomAditif: 'Copeau', PrixAditif: 30 },
    ]

    let Sorties = [
        { IdCheval: '1C', IdTypeAditif: '01S', Mois: 'Janvier', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '01S', Mois: 'Février', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '01S', Mois: 'Mars', Année: '2023' },
        { IdCheval: '1C', IdTypeAditif: '02S', Mois: 'Mars', Année: '2021' },
        { IdCheval: '1C', IdTypeAditif: '03S', Mois: 'Mars', Année: '2022' },
    ]
    let TypesSorties = [
        { IdTypesSorties: '01S', Nom: 'Paddock', Prix: 50, IdPériode: '01P' },
        { IdTypesSorties: '02S', Nom: 'Marcheur', Prix: -50, IdPériode: 'O3P' },
        { IdTypesSorties: '02S', Nom: 'Prairie', Prix: -50, IdPériode: 'O2P' },
        { IdTypesSorties: '03S', Nom: 'Monte', Prix: 30, IdPériode: '03P' },
    ]

    let TypePeriode = [
        { IdPériode: '01P', NomPériode: 'Semaine et Week-end' },
        { IdPériode: '02P', NomPériode: 'Week-End' },
        { IdPériode: '03P', NomPériode: 'Semaine' },
        { IdPériode: '04P', NomPériode: 'Semaine et Week-end' },
    ]

    let mois = ["Janvier", "Février", "Mars", "Avrils", "Mai", "Juin", "Juillet", "Août", "Semptembre", "Octobre", "Novembre", " Décembre"]

    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;


    const années = Array.from(new Set(facture.map(item => item.Année)));
    années.sort((a, b) => b - a);

    const [open, setOpen] = useState("");

    const handleOpen = () => {
        if (open === "") {
            setOpen(" show");
        }
        else {
            setOpen("");
        }

    };

    return (
        <>
            {/* Année en cours */}
            <div class="accordion" id={`accordion${year}`} style={{ marginTop: '20px' }}>
                <div class="accordion-item" id={`heading${year}`}>
                    <h2 class="accordion-header">
                        <button onClick={handleOpen} aria-expanded="true" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${year}`} aria-controls={`collapse${year}`} style={{ textAlign: 'right', backgroundColor: '#271503', color: 'white' }}>
                            {year}
                        </button>
                    </h2>
                    <div id={`collapse${year}`} class={`accordion-collapse collapse${open}`} aria-labelledby={`heading${year}`} data-bs-parent={`#accordion${year}`}>
                        <div class="accordion-body" >

                            <AliceCarousel mouseTracking items=

                                {
                                    mois.slice(0, month).map((moisSlice) =>
                                        <>
                                            {
                                                facture.filter(factureFiltre => factureFiltre.Année === String(year) && factureFiltre.Mois === moisSlice && factureFiltre.idClient === clientId).map((factureMap) =>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <button onClick={() => handleClick({ factureMap })} style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                                            <i style={{ fontSize: '6rem', color: '#271503' }} class="bi bi-file-earmark-pdf" />
                                                        </button>
                                                        <span>{moisSlice}</span>
                                                    </div>
                                                )
                                            }

                                        </>
                                    )
                                }


                            />
                        </div>
                    </div>
                </div>
            </div >
            {/* Annnées passées  */}
            {
                années.filter(anneesfiltrer => anneesfiltrer !== String(year)).map(anneefiltrermap =>

                    <div class="accordion accordion-flush" id={`accordion${anneefiltrermap}`} style={{ marginTop: '20px' }}>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button style={{ textAlign: 'right', backgroundColor: '#271503', color: 'white' }} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${anneefiltrermap}`} aria-expanded="true" aria-controls={`collapse${anneefiltrermap}`}>
                                    {anneefiltrermap}
                                </button>
                            </h2>
                            <div id={`collapse${anneefiltrermap}`} class="accordion-collapse collapse" data-bs-parent={`#accordion${anneefiltrermap}`}>
                                <div class="accordion-body" >

                                    <AliceCarousel mouseTracking items=
                                        {
                                            facture.filter(factureFiltre => factureFiltre.Année === anneefiltrermap && factureFiltre.idClient === clientId).map((factureMap) =>
                                                <>

                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <button onClick={() => handleClick({ factureMap })} style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                                                            <i style={{ fontSize: '6rem', color: '#271503' }} class="bi bi-file-earmark-pdf" />
                                                        </button>
                                                        <span>{factureMap.Mois}</span>
                                                    </div>


                                                </>
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div >
                )}

        </>
    )
}
export default MesFactures;