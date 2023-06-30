import Calendrier from "../../Calandrier/Calendrier";
import ParametreAdmin from "../../ParametreAdmin/ParametreAdmin"; 


  let categories = [
    { id: 'calendrier', name: 'Calendrier', icone:'bi bi-calendar' },
    { id: 'profil', name: 'Profil', icone:'bi bi-person' },
    { id: 'parametre', name: 'Paramètre', icone:'bi-gear'  },
  ];
  
 let subCategories = [
      { categorie : 'calendrier', id: 'Jour', content: <Calendrier/>},
      { categorie : 'calendrier', id: 'Mois', content: 'Contenu du mois...' },
      { categorie : 'calendrier', id: 'Agenda', content: 'Contenu de l\'agenda...' },
      { categorie : 'profil', id: 'Informations', content: 'Contenu des informations...' },
      { categorie : 'profil', id: 'Cheval', content: 'Contenu des chevaux...' },
      { categorie : 'profil', id: 'Factures', content: 'Contenu des factures...' },
      { categorie : 'parametreAdmin', id: 'Pension', content: <ParametreAdmin/> },
      { categorie : 'parametreAdmin', id: 'Sortie', content: 'Contenu de la sortire...' }, 

  ]
 

export  {categories, subCategories} 
