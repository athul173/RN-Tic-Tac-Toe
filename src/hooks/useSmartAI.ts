import { GameSymbols } from '../constants/Types';
import useDeepCopy from './useDeepCopy';
import useWinnerCheck from './useWinnerCheck';

const [hasWon] = useWinnerCheck();
const [deepCopy] = useDeepCopy();

const useSmartAi = () => {
    console.log('useSmartAi');
    const smartMove = (board: string[][], cpuSymbol: GameSymbols, userSymbol: GameSymbols) => {
        console.log('Getting smart');
        // AI to make its turn
        let bestScore = -100;
        let move = { aI: 0, bI: 0 };
        const matrixCopy = deepCopy(board);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (matrixCopy[i][j] == '') {
                    matrixCopy[i][j] = cpuSymbol;
                    const score = minimax(cpuSymbol, userSymbol, matrixCopy, 0, false);
                    matrixCopy[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        move = { aI: i, bI: j };
                    }
                }
            }
        }

        return move;
    };

    const minimax = (
        cpuSymbol: GameSymbols,
        userSymbol: GameSymbols,
        board: string[][],
        depth: number,
        isMaximizing: boolean,
    ) => {
        const scores = {
            [cpuSymbol]: 10,
            [userSymbol]: -10,
            Draw: 0,
        };

        const result = hasWon(board);
        if (result.winner !== null) {
            return scores[result.winner];
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (board[i][j] == '') {
                        board[i][j] = cpuSymbol;
                        const score = minimax(cpuSymbol, userSymbol, board, depth + 1, false);
                        board[i][j] = '';
                        bestScore = Math.max(score, bestScore);
                    }
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (board[i][j] == '') {
                        board[i][j] = userSymbol;
                        const score = minimax(cpuSymbol, userSymbol, board, depth + 1, true);
                        board[i][j] = '';
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
            return bestScore;
        }
    };

    return [smartMove];
};

export default useSmartAi;
