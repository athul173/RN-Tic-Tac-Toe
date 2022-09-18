import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { useStyles } from '../style/styles';

type Props = {
    onPress?: () => void;
    icon: ImageSourcePropType;
};

const RoundedButton = (props: Props) => {
    const styles = useStyles();

    return (
        <View style={styles.roundedBtnView}>
            <TouchableOpacity onPress={props.onPress} style={styles.roundedBtn}>
                <Image source={props.icon} style={styles.imageView} />
            </TouchableOpacity>
        </View>
    );
};

export default RoundedButton;
