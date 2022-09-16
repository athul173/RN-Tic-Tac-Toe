import { View, Text } from 'react-native';
import React from 'react';
import { useStyles } from '../../style/styles';
import { Board } from '../../components';

const Play = () => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Tic Tac Toe!</Text>
            </View>
            <Board />
        </View>
    );
};

export default Play;
