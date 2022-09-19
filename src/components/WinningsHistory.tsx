import { View, Text, Modal, Alert, Pressable } from 'react-native';
import React from 'react';
import { useStyles } from '../style/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Props = {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    iconLabel?: string;
};

const WinningsHistory = ({ modalVisible, setModalVisible }: Props) => {
    const { winningsCounter } = useSelector((state: RootState) => state.game);
    const styles = useStyles();
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
                <Pressable onPress={() => setModalVisible(false)} style={styles.popUpView}>
                    <Pressable
                        onPress={() => {
                            //setModalVisible(true);
                        }}
                        style={styles.modalView}
                    >
                        <Text style={{ ...styles.labelText, fontWeight: 'bold' }}>Winnings</Text>
                        <View style={styles.winningsView}>
                            <View style={styles.winningLabelsView}>
                                <Text style={styles.labelText}>CPU: {winningsCounter.CPU}</Text>
                            </View>
                            <View style={styles.winningLabelsView}>
                                <Text style={styles.labelText}>User: {winningsCounter.User}</Text>
                            </View>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    );
};

export default WinningsHistory;
