import React from 'react';
import { RoundedButton } from '.';

interface Props {
    onPressEasy: () => void;
    onPressHard: () => void;
}

const DifficultySelectorButtons = (props: Props) => {
    return (
        <>
            <RoundedButton onPress={props.onPressEasy} icon={require('../assets/images/easy.png')} />
            <RoundedButton onPress={props.onPressHard} icon={require('../assets/images/hard.png')} />
        </>
    );
};

export default DifficultySelectorButtons;
