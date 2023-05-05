import Swal from 'sweetalert2';

function ToastAlert({ Icon, Title }) {
   
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return (
        Toast.fire({
            icon: { Icon },
            title: { Title }
        })
    )
}

export default ToastAlert; 