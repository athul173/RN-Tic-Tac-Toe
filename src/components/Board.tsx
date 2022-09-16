import { View } from 'react-native';
import React, { useState } from 'react';
import { useStyles } from '../style/styles';
import { Cell } from '.';

const Board = () => {
    const styles = useStyles();

    const emptyBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    const [boardValues, setBoardValues] = useState(emptyBoard);
    const [counters, setCounters] = useState(0);

    const userSymbol = 'O';
    const cpuSymbol = 'X';

    //const [userValues, setUserValues] = useState<number[]>([]);

    const cpuMove = () => {
        const random = true;
        if (random) {
            const aI = Math.floor(Math.random() * 2.9);
            const bI = Math.floor(Math.random() * 2.9);
            console.log('Got values', aI, bI);
            if (boardValues[aI][bI] === '') {
                setTimeout(() => {
                    console.log('CPU making a move at', aI, bI);
                    boardUpdater(aI, bI, true);
                }, 2000);
            } else {
                console.log('CPU cannot move at', aI, bI);
                cpuMove();
            }
        }
    };

    const resetBoard = () => {
        setBoardValues(emptyBoard);
    };

    const boardUpdater = (aIndex: number, bIndex: number, cpu?: boolean) => {
        const matrixCopy = [...boardValues];
        matrixCopy[aIndex][bIndex] = cpu ? cpuSymbol : userSymbol;
        setCounters(counters + 1);
        setBoardValues(matrixCopy);
    };

    const onPressHandler = (aIndex: number, bIndex: number, emptyCell: boolean) => {
        console.log('The counters', counters);
        if (counters < 4) {
            if (emptyCell) {
                boardUpdater(aIndex, bIndex);
                cpuMove();
            } else {
                console.log('cell not empty');
            }
        } else {
            console.log('Reached final');
            setCounters(0);
            resetBoard();
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
