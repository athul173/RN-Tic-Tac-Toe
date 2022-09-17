import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../style/styles';
import { Cell } from '.';
import useWinnerCheck from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTurn, setPause, setResult, setRestart } from '../store/game';
import { RootState } from '../store';

const Board = () => {
    const styles = useStyles();

    const dispatch = useDispatch();
    const { restart } = useSelector((state: RootState) => state.game);

    const emptyBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    useEffect(() => {
        if (restart) {
            resetBoard();
            dispatch(setRestart(false));
        }
    }, [restart]);

    const [boardValues, setBoardValues] = useState(emptyBoard);
    const [counters, setCounters] = useState(0);

    const [hasWon] = useWinnerCheck();

    const userSymbol = 'O';
    const cpuSymbol = 'X';

    //const [userValues, setUserValues] = useState<number[]>([]);

    const cpuMove = () => {
        const random = true;
        if (random) {
            const aI = Math.floor(Math.random() * 2.9);
            const bI = Math.floor(Math.random() * 2.9);
            //console.log('Got values', aI, bI);
            if (boardValues[aI][bI] === '') {
                dispatch(setUserTurn(false));
                dispatch(setPause(true));
                setTimeout(() => {
                    //console.log('CPU making a move at', aI, bI);
                    boardUpdater(aI, bI, true);
                    dispatch(setUserTurn(true));
                    dispatch(setPause(false));
                    checkWinner(false);
                }, 1000);
            } else {
                //console.log('CPU cannot move at', aI, bI);
                cpuMove();
            }
        }
    };

    const resetBoard = () => {
        setCounters(0);
        setBoardValues(emptyBoard);
    };

    const boardUpdater = (aIndex: number, bIndex: number, cpu?: boolean) => {
        const matrixCopy = [...boardValues];
        matrixCopy[aIndex][bIndex] = cpu ? cpuSymbol : userSymbol;
        setCounters(counters + 1);
        setBoardValues(matrixCopy);
    };

    const checkWinner = (finalCheck: boolean) => {
        if (hasWon(userSymbol, boardValues)) {
            dispatch(setResult('You'));
            dispatch(setPause(true));
            return true;
        } else if (hasWon(cpuSymbol, boardValues)) {
            dispatch(setResult('CPU'));
            dispatch(setPause(true));
            return true;
        } else if (finalCheck) {
            dispatch(setResult('Draw'));
            dispatch(setPause(true));
            return true;
        }
        return false;
    };

    const onPressHandler = async (aIndex: number, bIndex: number, emptyCell: boolean) => {
        console.log('The counters', counters);
        if (counters <= 4) {
            if (emptyCell) {
                boardUpdater(aIndex, bIndex);
                if (counters >= 2) {
                    if (!checkWinner(false)) cpuMove();
                } else {
                    cpuMove();
                }
            } else {
                console.log('cell not empty');
            }
        } else {
            //console.log('Reached final and is the user winner? ');
            checkWinner(true);
            //resetBoard();
        }
    };

    return (
        <View style={styles.boardContainer}>
            {boardValues.map((_, aIndex) => {
                return (
                    <View style={{ flexDirection: 'row' }} key={aIndex}>
                        {boardValues[aIndex].map((value, bIndex) => {
                            const emptyCell = value === '';
                            return (
                                <Cell
                                    key={bIndex}
                                    cellValue={value}
                                    onPress={() => onPressHandler(aIndex, bIndex, emptyCell)}
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
