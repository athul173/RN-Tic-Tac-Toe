import { View, Text } from 'react-native';
import React from 'react';
import { useStyles } from '../../style/styles';
import { Board, CustomButton } from '../../components';
import { useTheme } from '../../style/themes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPause, setRestart, setResult } from '../../store/game';

const Play = () => {
    const styles = useStyles();
    const theme = useTheme();

    const dispatch = useDispatch();

    const { userTurn, pause, result, restart } = useSelector((state: RootState) => state.game);

    const buttonTitle = restart !== null ? 'Play Again' : 'Start game';

    const turnIndicator = `It's ${userTurn ? 'your' : `CPU's`} turn`;

    const isDrawCheckText = result !== 'Draw' ? `${result} Won!` : `It's a draw!`;

    const handleButton = () => {
        dispatch(setPause(false));
        dispatch(setResult(''));
        dispatch(setRestart(true));
    };

    const LabelRenderer = () => {
        return (
            <>
                {result === '' ? (
                    <Text style={styles.labelText}>{restart === null ? 'Welcome !' : turnIndicator}</Text>
                ) : (
                    <Text style={styles.labelText}>{isDrawCheckText}</Text>
                )}
            </>
        );
    };

    const ButtonRenderer = () => {
        return (
            <>
                {(pause && userTurn) || result !== '' ? (
                    <CustomButton
                        title={buttonTitle}
                        size=""
                        onPress={handleButton}
                        backgroundColor={theme.color.primary}
                    />
                ) : (
                    <></>
                )}
            </>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Tic Tac Toe!</Text>
            </View>
            <Board />
            <View style={styles.footerContainer}>
                <LabelRenderer />
                <ButtonRenderer />
            </View>
        </View>
    );
};

export default Play;
