import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStyles } from '../style/styles';

interface CellProps {
    cellValue: string;
    onPress: () => void;
}

const Cell = ({ cellValue, onPress }: CellProps) => {
    const styles = useStyles();

    return (
        <TouchableOpacity style={styles.cellStyle} onPress={onPress}>
            <Text style={{ fontSize: 80 }}>{cellValue}</Text>
        </TouchableOpacity>
    );
};

export default Cell;
