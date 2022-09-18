import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useStyles } from '../style/styles';
import { Cell } from '.';
import { useWinnerCheck, useDeepCopy, useSmartAI, useRandomAI } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTurn, setPause, setResult, setPlayAgain, setBoard, setStop } from '../store/game';
import { RootState } from '../store';
import { GameSymbols, Result } from '../constants/Types';

const Board = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const { playAgain, userSymbol, userTurn, board, stop, difficulty } = useSelector((state: RootState) => state.game);

    const emptyBoard: ''[][] = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    useEffect(() => {
        if (playAgain) {
            console.log('Restart use Effect');
            resetBoard();
        }
    }, [playAgain]);

    useEffect(() => {
        console.log('User turn changed ', userTurn, stop);

        if (!stop) {
            if (!checkWinner()) {
                if (!userTurn) {
                    cpuMakeMove();
                }
            }
        }
    }, [userTurn]);

    const [hasWon] = useWinnerCheck();
    const [deepCopy] = useDeepCopy();
    const [smartMove] = useSmartAI();
    const [randomMove] = useRandomAI();

    const cpuSymbol = userSymbol === 'O' ? 'X' : 'O';

    // const cpuMoveHandler = () => {
    //     const smart = false;
    //     cpuMakeMove(smart);
    // };

    const cpuMakeMove = () => {
        console.log('Going to move');
        const smart = difficulty === 'Hard';
        const moveMade = smart ? smartMove(board, cpuSymbol, userSymbol) : randomMove(board);
        boardUpdater(moveMade.aI, moveMade.bI, cpuSymbol);
        dispatch(setUserTurn(true));
        dispatch(setPause(false));
    };

    const userMoveHandler = (aIndex: number, bIndex: number, emptyCell: boolean) => {
        if (emptyCell) {
            boardUpdater(aIndex, bIndex, userSymbol);
            dispatch(setUserTurn(false));
            dispatch(setPause(true));
        } else {
            console.log('cell not empty');
        }
    };

    const resetBoard = () => {
        console.log('reset board');
        dispatch(setBoard(emptyBoard));
        dispatch(setPlayAgain(false));
        dispatch(setUserTurn(true));
    };

    const boardUpdater = (aIndex: number, bIndex: number, updateSymbol: GameSymbols) => {
        const matrixCopy = deepCopy(board);
        matrixCopy[aIndex][bIndex] = updateSymbol;
        console.log('Updating happening at ' + aIndex + ' ' + bIndex + ' with symbol ' + updateSymbol);
        dispatch(setBoard(matrixCopy));
    };

    const checkWinner = () => {
        if (hasWon(board) === userSymbol) {
            return showResult('You');
        } else if (hasWon(board) === cpuSymbol) {
            return showResult('CPU');
        } else if (hasWon(board) === 'Draw') {
            return showResult('Draw');
        }
        return false;
    };

    const showResult = (resultString: Result) => {
        dispatch(setResult(resultString));
        dispatch(setPause(true));
        dispatch(setStop(true));
        return true;
    };

    return (
        <View style={styles.boardContainer}>
            {board.map((_, aIndex) => {
                return (
                    <View style={{ flexDirection: 'row' }} key={aIndex}>
                        {board[aIndex].map((value, bIndex) => {
                            const emptyCell = value === '';
                            return (
                                <Cell
                                    key={bIndex}
                                    cellValue={value as GameSymbols | ''}
                                    onPress={() => userMoveHandler(aIndex, bIndex, emptyCell)}
                                />
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
};

export default Board;
