import { View, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useStyles } from '../../style/styles';
import { Board, CustomButton, Popup, RoundedButton, WinningsHistory } from '../../components';
import { useTheme } from '../../style/themes';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Play = () => {
    const styles = useStyles();
    const theme = useTheme();
    const { width } = Dimensions.get('window');

    const [modalVisible, setModalVisible] = useState(false);
    const [historyVisible, setHistoryVisible] = useState(false);

    const { userTurn, result, playAgain, stop } = useSelector((state: RootState) => state.game);

    const buttonTitle = playAgain !== null ? 'Play Again' : 'Start game';

    const turnIndicator = `It's ${userTurn ? 'your' : `CPU's`} turn`;

    const isDrawCheckText = result !== 'Draw' ? `${result} Won!` : `It's a draw!`;

    const handleGameButton = () => {
        setModalVisible(true);
    };

    const handleHistoryButton = () => {
        setHistoryVisible(true);
    };

    const LabelRenderer = () => {
        return (
            <>
                {result === '' ? (
                    <Text style={styles.labelText}>{playAgain === null ? 'Welcome !' : turnIndicator}</Text>
                ) : (
                    <Text style={styles.labelText}>{isDrawCheckText}</Text>
                )}
            </>
        );
    };

    const ButtonRenderer = () => {
        return (
            <>
                {stop && (
                    <CustomButton
                        title={buttonTitle}
                        size=""
                        onPress={handleGameButton}
                        backgroundColor={theme.color.primary}
                    />
                )}
            </>
        );
    };

    const HistoryRenderer = () => {
        return (
            <>
                {stop ? (
                    <RoundedButton
                        size={40}
                        onPress={handleHistoryButton}
                        icon={require('../../assets/images/history.png')}
                    ></RoundedButton>
                ) : (
                    <View style={{ width: width / 5, backgroundColor: 'black' }}></View>
                )}
            </>
        );
    };

    return (
        <View style={styles.container}>
            <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <WinningsHistory modalVisible={historyVisible} setModalVisible={setHistoryVisible} />
            <View style={{ ...styles.headerContainer, width: width }}>
                <View style={{ width: width / 5, backgroundColor: 'black' }}></View>
                <Text style={{ ...styles.titleText, width: width - (width + width) / 5 }}>Tic Tac Toe!</Text>
                <HistoryRenderer />
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
