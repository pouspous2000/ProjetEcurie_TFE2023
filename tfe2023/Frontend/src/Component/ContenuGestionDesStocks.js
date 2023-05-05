import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ContenuGesionDesStocks({ MatierePremiere }) {
    let annee = (new Date().getFullYear())
    let annees = (new Date().getMonth())+1

    let mois = ["Janvier","Février", "Mars", "Avrils", "Mai", "Juin", "Juillet", "Août", "Semptembre", "Octobre", "Novembre"," Décembre"]

    // let data = [
    //     {mois : "Janvier", qtt :''
    //     {mois : "Février", qtt :
    //     {mois : "Mars",  qtt :
    //     {mois :"Avrils", qtt :
    //     {mois : "Mai",  qtt :
    //     {mois :"Juin",  qtt :
    //     {mois :"Juillet",  qtt :
    //     {mois :"Août",  qtt :
    //     {mois :"Semptembre",  qtt :
    //     {mois :"Octobre",  qtt :
    //     {mois :"Novembre", qtt :
    //     {mois :" Décembre",  qtt :
    
    // ]


    const options = {   
        data: [{
            type: "column",
            
            dataPoints: [
                
                { label: "Janvier", y: 10 },
                { label: "Février", y: 15 },
                { label: "Mars", y: 25 },
                { label: "Avril", y: 30 },
                { label: "Mai", y: 28 },
                { label: "Juin", y: 30 },
                { label: "Juillet", y: 30 },
                { label: "Aout", y: 30 },
                { label: "Septembre", y: 30 },
                { label: "Octobre", y: 30 },
                { label: "Novembre", y: 30 },
                { label: "Décembre", y: 30 },
            ]
        }]
        
    }

    return (
        <div class="tab-pane fade" id={`${MatierePremiere}`} role="tabpanel" aria-labelledby={`${MatierePremiere}-tab`} style={{ backgroundColor: 'white', padding: '2rem' }}>
            <h2 style={{textAlign:'center'}}>Gestion des Stocks {annee} : {MatierePremiere}</h2>
            <div style={{marginTop:'20px', marginBottom:'20px'}}>
                <span>Jour de livraison : </span>
                <input style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'lightgrey', width: '100px' , color:'brown'}} type='date'></input>
            </div>
            <div style={{marginTop:'20px', marginBottom:'20px'}}>
                <span >Quantitée livrée : </span>
                <input type='number'style={{ borderRadius: '5px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'lightgrey', width: '100px' , color:'brown'}}></input>
            </div>
            <hr/>
            <div style={{height: '300px', width: '100%'}}>
                <CanvasJSChart options={options} />

            </div>

        </div>
    )
}
export default ContenuGesionDesStocks; 