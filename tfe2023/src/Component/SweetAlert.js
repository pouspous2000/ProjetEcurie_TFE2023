import Swal from 'sweetalert2'

function SweetAlert(Titre, Text, Icon, showDenyButton, confirmButtonText, denyButtonText, TextConfirme) {

  Swal.fire({
    title: { Titre },
    text: { Text },
    icon: { Icon },
    showDenyButton: { showDenyButton },
    confirmButtonText: { confirmButtonText },
    denyButtonText: { denyButtonText },
  }).then((result) => {

    if (result.isConfirmed) {
      Swal.fire({ TextConfirme }, '', 'success')
    }
  })
 


}
export default SweetAlert; 