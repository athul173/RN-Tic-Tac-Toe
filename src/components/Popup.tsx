import { View, Text, Modal, Alert } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPause, setResult, setPlayAgain, setUserSymbol } from '../store/game';
import RoundedButton from './RoundedButton';
import { useStyles } from '../style/styles';

type Props = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
};

const Popup = ({ modalVisible, setModalVisible }: Props) => {
    const dispatch = useDispatch();

    const styles = useStyles();

    const userSymbolSelector = () => {
        dispatch(setPause(false));
        dispatch(setResult(''));
        dispatch(setPlayAgain(true));
    };

    const buttonHandler = (symbol: 'O' | 'X') => {
        dispatch(setUserSymbol(symbol));
        setModalVisible(false); //
        userSymbolSelector();
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
                        <Text style={styles.labelText}>Select your symbol</Text>
                        <View style={styles.symbolSelectorView}>
                            <RoundedButton
                                onPress={() => {
                                    buttonHandler('O');
                                }}
                                icon={require('../assets/images/oSymbol.png')}
                            />
                            <RoundedButton
                                onPress={() => {
                                    buttonHandler('X');
                                }}
                                icon={require('../assets/images/xSymbol.png')}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Popup;
