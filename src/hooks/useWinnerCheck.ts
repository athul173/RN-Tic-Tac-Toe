const useWinnerCheck = () => {
    const hasWon = (symbol: 'O' | 'X', board: string[][]) =>
        horizontalChecker(symbol, board) ||
        horizontalChecker(symbol, boardTransposer(board)) ||
        hasWonDiagonally(symbol, board);

    const getDiagonalValues = (board: string[][]) => {
        const diagonalValues = [];
        const equalDiagonal: string[] = [];
        const oppositeDiagonal: string[] = [];

        board.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (rowIndex === colIndex) {
                    equalDiagonal.push(board[rowIndex][colIndex]);
                }
            });
        });

        board.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (rowIndex + colIndex === board.length - 1) {
                    oppositeDiagonal.push(board[rowIndex][colIndex]);
                }
            });
        });

        diagonalValues.push(equalDiagonal, oppositeDiagonal);
        console.log('Diagonal moves: ' + diagonalValues);
        return diagonalValues;
    };

    const hasWonDiagonally = (symbol: 'O' | 'X', board: string[][]) => {
        const winnerChecker = getDiagonalValues(board).some((moves) => moves.every((move) => move === symbol));
        console.log('Diagonal Winner ' + winnerChecker + ' for ' + symbol);
        return winnerChecker;
    };

    const boardTransposer = (board: string[][]) => {
        return board[0].map((_, i) => board.map((row) => row[i]));
    };

    const horizontalChecker = (symbol: 'O' | 'X', board: string[][]) => {
        const winnerChecker = board.some((moves) => moves.every((move) => move === symbol));
        console.log('Horizontal Winner ' + winnerChecker + 'for ' + symbol);
        return winnerChecker;
    };

    return [hasWon];
};

export default useWinnerCheck;
