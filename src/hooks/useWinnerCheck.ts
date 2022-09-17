const useWinnerCheck = () => {
    const hasWon = (symbol: 'O' | 'X', board: string[][]) =>
        isHorizontal(symbol, board) || isHorizontal(symbol, transposeBoard(board)) || isDiagonalWinner(symbol, board);

    const getDiagonalMoves = (board: string[][]) => {
        const diagonalMoves = [];
        const equalBasedDiagonal: string[] = [];
        const sumBasedDiagonal: string[] = [];

        board.forEach((row, rowIndex) => {
            row.forEach((_, colIndex) => {
                if (rowIndex === colIndex) {
                    equalBasedDiagonal.push(board[rowIndex][colIndex]);
                }
            });
        });

        board.forEach((row, rowIndex) => {
            row.forEach((_, colIndex) => {
                if (rowIndex + colIndex === board.length - 1) {
                    sumBasedDiagonal.push(board[rowIndex][colIndex]);
                }
            });
        });

        diagonalMoves.push(equalBasedDiagonal, sumBasedDiagonal);
        console.log('Diagonal moves: ' + diagonalMoves);
        return diagonalMoves;
    };

    const isDiagonalWinner = (symbol: 'O' | 'X', board: string[][]) => {
        const winnerChecker = getDiagonalMoves(board).some((moves) => moves.every((move) => move === symbol));
        console.log('Diagonal Winner', winnerChecker);
        return winnerChecker;
    };

    const transposeBoard = (board: string[][]) => {
        return board[0].map((col, i) => board.map((row) => row[i]));
    };

    const isHorizontal = (symbol: 'O' | 'X', board: string[][]) => {
        const winnerChecker = board.some((moves) => moves.every((move) => move === symbol));
        console.log('Horizontal Winner', winnerChecker);
        return winnerChecker;
    };

    return [hasWon];
};

export default useWinnerCheck;
