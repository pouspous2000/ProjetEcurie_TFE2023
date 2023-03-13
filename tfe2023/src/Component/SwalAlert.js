import Swal from 'sweetalert2';
function SwalAlert(){
    const MySwal = new(Swal)

  
    
        MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>You clicked the button!</i>,
            icon: 'success'
          })
    
    
}
export default SwalAlert;