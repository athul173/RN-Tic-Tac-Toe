import { View, Text } from 'react-native';
import React from 'react';
import { useStyles } from '../../style/styles';
import { Board, CustomButton } from '../../components';
import { useTheme } from '../../style/themes';

const Play = () => {
    const styles = useStyles();
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Tic Tac Toe!</Text>
            </View>
            <Board />
            <View style={styles.footerContainer}>
                <Text style={styles.labelText}>Something</Text>
                <CustomButton title="Start game" size="" backgroundColor={theme.color.primary} />
            </View>
        </View>
    );
};

export default Play;
