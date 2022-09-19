import { View, Text, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setPause,
    setResult,
    setPlayAgain,
    setUserSymbol,
    setStop,
    setDifficulty,
    setWinningCombination,
} from '../store/game';
import { useStyles } from '../style/styles';
import { AIDifficulty, GameSymbols } from '../constants/Types';
import SymbolSelectorButton from './SymbolSelectorButtons';
import DifficultySelectorButtons from './DifficultySelectorButtons';

type Props = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    iconLabel?: string;
};

const Popup = ({ modalVisible, setModalVisible }: Props) => {
    const [secondModal, setSecondModal] = useState<boolean>(false);

    const dispatch = useDispatch();

    const styles = useStyles();

    const symbolSelectorButtonHandler = (symbol: GameSymbols) => {
        dispatch(setUserSymbol(symbol));
        setModalVisible(false);
        setSecondModal(true);
        setModalVisible(true);
    };

    const difficultyButtonHandler = (difficulty: AIDifficulty) => {
        dispatch(setDifficulty(difficulty));
        setModalVisible(false);
        setSecondModal(false);
        dispatch(setPause(false));
        dispatch(setWinningCombination(['', '', '']));
        dispatch(setResult(''));
        dispatch(setStop(false));
        dispatch(setPlayAgain(true));
    };

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.popUpView}>
                    <View style={styles.modalView}>
                        <Text style={styles.labelText}>{`Select your ${secondModal ? 'difficulty' : 'symbol'} `}</Text>
                        <View style={styles.selectorView}>
                            {secondModal ? (
                                <DifficultySelectorButtons
                                    onPressEasy={() => difficultyButtonHandler('Easy')}
                                    onPressHard={() => difficultyButtonHandler('Hard')}
                                />
                            ) : (
                                <SymbolSelectorButton
                                    onPressO={() => symbolSelectorButtonHandler('O')}
                                    onPressX={() => symbolSelectorButtonHandler('X')}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Popup;
