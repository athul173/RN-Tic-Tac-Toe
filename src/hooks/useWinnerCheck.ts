const useWinnerCheck = () => {
    const hasWon = (board: string[][]) => {
        let winner = null;

        for (let i = 0; i < 3; i++) {
            if (equalSymbolsCheck(board[i][0], board[i][1], board[i][2])) {
                winner = board[i][0];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (equalSymbolsCheck(board[0][i], board[1][i], board[2][i])) {
                winner = board[0][i];
            }
        }

        if (equalSymbolsCheck(board[0][0], board[1][1], board[2][2])) {
            winner = board[0][0];
        }
        if (equalSymbolsCheck(board[2][0], board[1][1], board[0][2])) {
            winner = board[2][0];
        }

        //Return winner
        if (winner === null && gameFinished(board)) {
            return 'Draw';
        } else {
            return winner;
        }
    };

    const gameFinished = (board: string[][]) => {
        let emptyCells = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == '') {
                    emptyCells++;
                }
            }
        }
        return emptyCells === 0;
    };

    const equalSymbolsCheck = (first: string, second: string, third: string) => {
        return first == second && second == third && first != '';
    };

    return [hasWon];
};

export default useWinnerCheck;
