function Modal ({title, message, onClose}){

    return (
        <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fermer</button>
      </div>

    )
}
export default Modal; 