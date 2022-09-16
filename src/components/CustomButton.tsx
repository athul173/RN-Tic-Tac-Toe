import React, { FC } from 'react';
import { TouchableOpacity, Text, ColorValue } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useStyles } from '../style/styles';
import { useTheme } from '../style/themes';

interface customButtonProps {
    onPress?: () => void;
    title: string;
    size: string;
    backgroundColor?: ColorValue | undefined;
    linearGradientColors?: { first: string | number; second: string | number };
}

const CustomButton: FC<customButtonProps> = (customButtonProps) => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <TouchableOpacity
            onPress={customButtonProps.onPress}
            style={[
                styles.appButtonContainer,
                customButtonProps.size === 'sm'
                    ? {
                          paddingHorizontal: 8,
                          paddingVertical: 6,
                          elevation: 6,
                      }
                    : {
                          paddingHorizontal: 24,
                          paddingVertical: 18,
                          elevation: 6,
                      },
                customButtonProps.backgroundColor
                    ? { backgroundColor: customButtonProps.backgroundColor }
                    : { backgroundColor: theme.color.transparent },
            ]}
        >
            {customButtonProps.linearGradientColors ? (
                <LinearGradient
                    colors={[
                        customButtonProps.linearGradientColors?.first,
                        customButtonProps.linearGradientColors.second,
                    ]}
                    style={styles.appButtonContainer}
                >
                    <Text style={[styles.appButtonText, customButtonProps.size === 'sm' && { fontSize: 14 }]}>
                        {customButtonProps.title}
                    </Text>
                </LinearGradient>
            ) : (
                <Text
                    style={[
                        styles.appButtonText,
                        customButtonProps.size === 'sm' ? { fontSize: 14 } : { fontSize: 24 },
                    ]}
                >
                    {customButtonProps.title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
