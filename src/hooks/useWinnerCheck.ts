const useWinnerCheck = () => {
    const hasWon = (board: string[][]) => {
        const winner: {
            winner: string | null;
            winningCombination: string[];
        } = {
            winner: null,
            winningCombination: ['', '', ''],
        };

        for (let i = 0; i < 3; i++) {
            if (equalSymbolsCheck(board[i][0], board[i][1], board[i][2])) {
                winner.winner = board[i][0];
                winner.winningCombination = [`${i}0`, `${i}1`, `${i}2`];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (equalSymbolsCheck(board[0][i], board[1][i], board[2][i])) {
                winner.winner = board[0][i];
                winner.winningCombination = [`0${i}`, `1${i}`, `2${i}`];
            }
        }

        if (equalSymbolsCheck(board[0][0], board[1][1], board[2][2])) {
            winner.winner = board[0][0];
            winner.winningCombination = [`00`, `11`, `22`];
        }
        if (equalSymbolsCheck(board[2][0], board[1][1], board[0][2])) {
            winner.winner = board[2][0];
            winner.winningCombination = [`20`, `11`, `02`];
        }

        //Return winner
        if (winner.winner === null && gameFinished(board)) {
            winner.winner = 'Draw';
            winner.winningCombination = ['', '', ''];
            return winner;
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
