import Calendrier from "../../Calandrier/Calendrier";
import ParametreAdmin from "../../ParametreAdmin/ParametreAdmin"; 



  let categories = [
    { id: 'calendrier', name: 'Calendrier', icone:'bi bi-calendar' },
    { id: 'communaute', name: 'Communauté', icone: 'bi bi-people' },
    { id: 'parametreAdmin', name: 'Paramètre Admin', icone: 'bi-wrench-adjustable' },
    { id: 'parametre', name: 'Paramètre', icone:'bi-gear'  },
  ];
  
 let subCategories = [
      { categorie : 'calendrier', id: 'Jour', content: <Calendrier/>},
      { categorie : 'calendrier', id: 'Mois', content: 'Contenu du mois...' },
      { categorie : 'calendrier', id: 'Agenda', content: 'Contenu de l\'agenda...' },
      { categorie : 'communaute', id: 'Client', content: 'Contenu de la communauté...' },
      { categorie : 'communaute', id: 'Facture', content: 'Contenu des Factures...' },
      { categorie : 'parametreAdmin', id: 'Pension', content: <ParametreAdmin/> },
      { categorie : 'parametreAdmin', id: 'Sortie', content: 'Contenu de la sortire...' }, 

  ]
 

export  {categories, subCategories} 
