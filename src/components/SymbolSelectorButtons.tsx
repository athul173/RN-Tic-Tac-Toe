import React from 'react';
import { RoundedButton } from '.';

interface Props {
    onPressO: () => void;
    onPressX: () => void;
}

const SymbolSelectorButton = (props: Props) => {
    return (
        <>
            <RoundedButton onPress={props.onPressO} icon={require('../assets/images/oSymbol.png')} />
            <RoundedButton onPress={props.onPressX} icon={require('../assets/images/xSymbol.png')} />
        </>
    );
};

export default SymbolSelectorButton;
