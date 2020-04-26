const DUMMY_DATAS = [
  {
    cards: {
      'card-1': { id: 'card-1', title: 'Chef de projet digital', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-2': { id: 'card-2', title: 'Chef de projet ERP', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-3': { id: 'card-3', title: 'Développeur web', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-4': { id: 'card-4', title: 'Consultant Digital', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Candidatures',
        cardIds: ['card-1', 'card-2', 'card-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Relance',
        cardIds: [],
        
      },
      'column-3': {
        id: 'column-3',
        title: '1er entretien',
        cardIds: ['card-4'],
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
    creator: 'u1'
  },
  {
    cards: {
      'card-1': { id: 'card-1', title: 'Chef de projet digital', date: '30 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-2': { id: 'card-2', title: 'Chef de projet ERP', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-3': { id: 'card-3', title: 'Développeur web', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
      'card-4': { id: 'card-4', title: 'Consultant Digital', date: '28 mars', exitDate: '4 avril', company: 'AP Web', platform: 'Indeed', contact: 'Alexis PEYRON', email: 'job@apweb.fr', type: 'démarchage' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Candidatures',
        cardIds: ['card-1', 'card-2', 'card-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Relance',
        cardIds: [],
        
      },
      'column-3': {
        id: 'column-3',
        title: '1er entretien',
        cardIds: ['card-4'],
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
    creator: 'u2'
  }
]


export default DUMMY_DATAS;
