import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../style/styles';
import { Cell } from '.';
import { useWinnerCheck, useDeepCopy } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTurn, setPause, setResult, setPlayAgain, setBoard, setStop } from '../store/game';
import { RootState } from '../store';
import { GameSymbols, Result } from '../constants/Types';

const Board = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const { playAgain, userSymbol, userTurn, board, stop } = useSelector((state: RootState) => state.game);

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
            switch (true) {
                case counters < 5:
                    if (!userTurn) {
                        cpuMoveHandler();
                    }
                    break;
                case counters >= 5 && counters < 9:
                    if (!userTurn && !checkWinner(false)) {
                        console.log('No winner so going to run', !checkWinner(false));
                        cpuMoveHandler();
                    }
                    break;
                default:
                    checkWinner(true);
                    break;
            }
        }
    }, [userTurn]);

    const [counters, setCounters] = useState(0);

    const [hasWon] = useWinnerCheck();
    const [deepCopy] = useDeepCopy();

    const cpuSymbol = userSymbol === 'O' ? 'X' : 'O';

    //const [userValues, setUserValues] = useState<number[]>([]);

    const cpuMoveHandler = () => {
        console.log('cpu moving and the counter is ', counters);
        const random = true;
        if (random) {
            const aI = Math.floor(Math.random() * 2.9);
            const bI = Math.floor(Math.random() * 2.9);
            if (board[aI][bI] === '') {
                setTimeout(() => {
                    //console.log('CPU making a move at', aI, bI);
                    boardUpdater(aI, bI, cpuSymbol);
                    dispatch(setUserTurn(true));
                    dispatch(setPause(false));
                }, 500);
            } else {
                //console.log('CPU cannot move at', aI, bI);
                cpuMoveHandler();
            }
        }
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
        setCounters(0);
        dispatch(setBoard(emptyBoard));
        dispatch(setPlayAgain(false));
        dispatch(setUserTurn(true));
    };

    const boardUpdater = (aIndex: number, bIndex: number, updateSymbol: GameSymbols) => {
        const matrixCopy = deepCopy(board);
        matrixCopy[aIndex][bIndex] = updateSymbol;
        console.log('Updating happening at ' + aIndex + ' ' + bIndex + ' with symbol ' + updateSymbol);
        setCounters(counters + 1);
        dispatch(setBoard(matrixCopy));
    };

    const checkWinner = (finalCheck: boolean) => {
        if (hasWon(userSymbol, board)) {
            return showResult('You');
        } else if (hasWon(cpuSymbol, board)) {
            return showResult('CPU');
        } else if (finalCheck) {
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
