// import React, { Component, useState } from 'react';
// // import Modal from 'react-modal';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'moment/locale/fr'; // Importez la langue française pour moment.js
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Importez les
// import Modal from './Component/Modal';

// function Calendrier({ onCreate }) {
//     // const [showModal, setShowModal] = useState(false);
//     const [modalData, setModalData] = useState(null);
//     const [modalTitle, setModalTitle] = useState('');
//     const [modalMessage, setModalMessage] = useState('');

//     const events = [
//         {
//             title: 'Réunion avec l\'équipe',
//             start: new Date(2023, 3, 7, 9, 0),
//             end: new Date(2023, 3, 7, 11, 0),
//             description: 'Réunion hebdomadaire avec l\'équipe de développement',
//         },
//         {
//             title: 'Lunch avec le client',
//             start: new Date(2023, 3, 7, 12, 0),
//             end: new Date(2023, 3, 7, 13, 0),
//             description: 'Formation sur les bonnes pratiques de codage',
//         },
//     ]

//     const tooltipAccessor = event => {
//         return event.description;
//     };


//     moment.locale('fr');

//     const localizer = momentLocalizer(moment);
//     const [showModal, setShowModal] = useState(false);

//     const handleButtonClick = (title, message) => {
//         setModalTitle(title);
//         setModalMessage(message);
//         setShowModal(true);
//     }

//     const handleCloseModal = () => {
//         setShowModal(false);
//     }


//     // const handleOpenModal = (event) => {
//     //     setModalData(event);
//     //     setShowModal(true);
//     //     console.log('coucou')
//     // };

//     // const handleCloseModal = () => {
//     //     setModalData({});
//     //     setShowModal(false);
//     // };

//     const getNewModalData = () => {
//         // Récupérer les nouvelles données pour le modal
//         // ...
//     };
//     const customModalStyle = {
//         overlay: {
//             backgroundColor: 'black', // Une couleur plus opaque et plus foncée
//             zIndex: 9999,
//         },
//         content: {
//             backgroundColor: '#fff',
//             borderRadius: '5px',
//             padding: '20px',
//             opacity: 1,
//             height: '50%',
//             width: '50%',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//             marginTop: 'auto',
//             marginBottom: 'auto',

//         },
//     };

//     return (
//         <>
//             <Calendar

//                 localizer={localizer}
//                 events={events}
//                 startAccessor="start"
//                 endAccessor="end"
//                 selectable
//                 style={{ height: '100vh' }}


//                 components={{
//                     event: ({ event }) => (
//                         // <div>
//                         //     <button style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'transparent' }} onClick={() => handleOpenModal(event)}>{event.title}</button>
//                         // </div>
//                         <div>
//                             <button onClick={() => handleButtonClick("Modal 1", "Contenu du modal 1")}>Afficher le modal 1</button>
//                             <button onClick={() => handleButtonClick("Modal 2", "Contenu du modal 2")}>Afficher le modal 2</button>
//                             {showModal && (
//                                 <Modal
//                                     title="Titre du modal"
//                                     message="Message du modal"
//                                     onClose={handleCloseModal}
//                                 />
//                             )}
//                         </div>
//                     ),
//                 }}

//             />
//             {/* <Modal
//                 style={customModalStyle}
//                 isOpen={showModal}
//                 onRequestClose={handleCloseModal}
//                 key={Math.random()}
//                 aria={{
//                     labelledby: "heading",
//                     describedby: "full_description"
//                 }}
//                 ariaHideApp={false}
//             /> */}





//         </>
//     )

// }
// export default Calendrier; 
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/fr';

moment.locale('fr');
const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Réunion avec l\'équipe',
    start: new Date(2023, 3, 7, 9, 0),
    end: new Date(2023, 3, 7, 11, 0),
    description: 'Réunion hebdomadaire avec l\'équipe de développement',
  },
  {
    title: 'Lunch avec le client',
    start: new Date(2023, 3, 7, 12, 0),
    end: new Date(2023, 3, 7, 13, 0),
    description: 'Formation sur les bonnes pratiques de codage',
  },
];

const customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
    opacity: 1,
    height: '50%',
    width: '50%',
    margin: 'auto',
  },
};

function EventDetailsModal({ event, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customModalStyle}
    >
      <h2>{event.title}</h2>
      <h3>{moment(event.start).format('LL')}</h3>
      <p>{event.description}</p>
      <button onClick={onClose}>Fermer</button>
    </Modal>
  );
}

function Calendrier() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const eventPropGetter = (event) => {
    return {
      onClick: () => handleEventClick(event),
    };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        style={{ height: '100vh' }}
        eventPropGetter={eventPropGetter}
      />

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default Calendrier;