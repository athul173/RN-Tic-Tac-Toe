import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from '../style/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { GameSymbols } from '../constants/Types';

interface CellProps {
    cellValue: GameSymbols | '';
    onPress: () => void;
}

const Cell = ({ cellValue, onPress }: CellProps) => {
    const styles = useStyles();

    const { pause } = useSelector((state: RootState) => state.game);

    return (
        <TouchableOpacity style={styles.cellStyle} disabled={pause} onPress={onPress}>
            <Text style={cellValue === 'O' ? styles.cellOSymbol : styles.cellXSymbol}>{cellValue}</Text>
        </TouchableOpacity>
    );
};

export default Cell;
