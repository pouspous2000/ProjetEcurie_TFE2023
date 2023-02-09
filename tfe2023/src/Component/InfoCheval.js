import { NavLink } from 'react-router-dom';

function InfoCheval() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <div style={{ float: 'left', marginLeft: '12rem' }}>
                <i class="bi bi-file-text-fill" style={{ fontSize: "2rem" }}></i>
                <NavLink onClick={onButtonClick} >Papier du cheval </NavLink>
            </div>
            <div style={{ float: 'right' }}>
                <i class="bi bi-file-text-fill" style={{ fontSize: "2rem" }}></i>
                <NavLink onClick={onButtonClick} >Règlement intérieur</NavLink>
            </div>
        </>
    )
}
export default InfoCheval; 