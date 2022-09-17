import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from '../style/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface CellProps {
    cellValue: string;
    onPress: () => void;
}

const Cell = ({ cellValue, onPress }: CellProps) => {
    const styles = useStyles();

    const { pause } = useSelector((state: RootState) => state.game);

    return (
        <TouchableOpacity style={styles.cellStyle} disabled={pause} onPress={onPress}>
            <Text style={{ fontSize: 80 }}>{cellValue}</Text>
        </TouchableOpacity>
    );
};

export default Cell;
