import React from 'react';

import dummyDatas from './dummyDatas';
import Column from './column';

class Board extends React.Component {
  state = dummyDatas;

  render() {
    return this.state.columnOrder.map(columnId=> {
      const column = this.state.columns[columnId];
      const cards = column.cardIds.map(cardId => this.state.cards[cardId]);

      return <Column key={column.id} column={column} cards={cards}/>;
    })
  }
}


export default Board;