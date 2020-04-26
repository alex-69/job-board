import React from 'react';
import { useParams } from 'react-router-dom';

import dummyDatas from './dummyDatas';

import Board from './Board';

const Dummy_board = dummyDatas;

const UserBoard = () => {
  const userId = useParams().userId;
  const loadedBoard = Dummy_board.filter(board => board.creator === userId);
    return <Board items={loadedBoard[0]}/>
};

export default UserBoard;
