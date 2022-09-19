import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useStyles } from '../style/styles';
import { Cell } from '.';
import { useWinnerCheck, useDeepCopy, useSmartAI, useRandomAI } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
    setUserTurn,
    setPause,
    setResult,
    setPlayAgain,
    setBoard,
    setStop,
    setWinningsCounter,
    setWinningCombination,
} from '../store/game';
import { RootState } from '../store';
import { GameSymbols, Result, WinningCombinations } from '../constants/Types';

const Board = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const { playAgain, userSymbol, userTurn, board, stop, difficulty, winningCombination } = useSelector(
        (state: RootState) => state.game,
    );

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
        setTimeout(() => {
            const smart = difficulty === 'Hard';
            const moveMade = smart ? smartMove(board, cpuSymbol, userSymbol) : randomMove(board);
            boardUpdater(moveMade.aI, moveMade.bI, cpuSymbol);
            dispatch(setUserTurn(true));
            dispatch(setPause(false));
        }, 1000);
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
        const winningInformation = hasWon(board);
        const winner = winningInformation.winner;
        const winningCombination = winningInformation.winningCombination;
        if (winner === userSymbol) {
            return showResult('You', winningCombination);
        } else if (winner === cpuSymbol) {
            return showResult('CPU', winningCombination);
        } else if (winner === 'Draw') {
            return showResult('Draw', winningCombination);
        }
        return false;
    };

    const showResult = (resultString: Result, combination: WinningCombinations) => {
        console.log('Heres the winning combo ', combination);
        dispatch(setWinningsCounter(resultString));
        dispatch(setWinningCombination(combination));
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
                            const winningCombinationCell = winningCombination.includes(`${aIndex}${bIndex}`);
                            return (
                                <Cell
                                    key={bIndex}
                                    winningCombinationCell={winningCombinationCell}
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
