const RandomAI = () => {
    const randomMove = (board: string[][]) => {
        let move = { aI: 0, bI: 0 };
        const aI = Math.floor(Math.random() * 2.9);
        const bI = Math.floor(Math.random() * 2.9);
        if (board[aI][bI] === '') {
            //console.log('CPU making a move at', aI, bI);
            move = { aI: aI, bI: bI };
        } else {
            //console.log('CPU cannot move at', aI, bI);
            randomMove(board);
        }
        return move;
    };
    return [randomMove];
};

export default RandomAI;
