const RandomAI = () => {
    const randomMove = (board: string[][]) => {
        console.log('Using random AI');
        let move = { aI: 0, bI: 0 };
        const iIndex = Math.floor(Math.random() * 2.9);
        const jIndex = Math.floor(Math.random() * 2.9);
        if (board[iIndex][jIndex] === '') {
            //console.log('CPU making a move at', aI, bI);
            move = { aI: iIndex, bI: jIndex };
        } else {
            //console.log('CPU cannot move at', aI, bI);
            move = randomMove(board);
            console.log('Cannot find move but got ', move);
        }
        return move;
    };
    return [randomMove];
};

export default RandomAI;
