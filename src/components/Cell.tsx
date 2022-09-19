import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from '../style/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { GameSymbols } from '../constants/Types';

interface CellProps {
    cellValue: GameSymbols | '';
    onPress: () => void;
    winningCombinationCell: boolean;
}

const Cell = ({ cellValue, onPress, winningCombinationCell }: CellProps) => {
    const styles = useStyles(winningCombinationCell);

    const { pause } = useSelector((state: RootState) => state.game);

    return (
        <TouchableOpacity
            style={winningCombinationCell ? styles.winningCell : styles.cellStyle}
            disabled={pause}
            onPress={onPress}
        >
            <Text style={cellValue === 'O' ? styles.cellOSymbol : styles.cellXSymbol}>{cellValue}</Text>
        </TouchableOpacity>
    );
};

export default Cell;
