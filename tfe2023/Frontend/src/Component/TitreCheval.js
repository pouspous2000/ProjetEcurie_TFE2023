import '../CSS/TitreCheval.css'
function TitreCheval({NomCheval, index}) {

    return (
        <>
         <li class="nav-item" role="presentation" >
            {{index}===0 ? <button style={{color:'#CD853F'}} class="nav-link" id={`${NomCheval}-tab`} data-bs-toggle="tab" data-bs-target={`#${NomCheval}`} type="button" role="tab" aria-controls={`${NomCheval}`} aria-selected="true">{NomCheval}</button>
            : <button style={{color: '#CD853F'}} class="nav-link" id={`${NomCheval}-tab`} data-bs-toggle="tab" data-bs-target={`#${NomCheval}`} type="button" role="tab" aria-controls={`${NomCheval}`} aria-selected="false" >{NomCheval}</button>}  
        </li>
       

        </>
       

    )

}
export default TitreCheval; 