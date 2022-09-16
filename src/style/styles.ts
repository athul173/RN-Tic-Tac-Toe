import { StyleSheet } from 'react-native';
import { useTheme } from './themes';

export const useStyles = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.color.appBackground,
        },
        headerContainer: {
            flex: 1 / 5,
        },
        footerContainer: {
            flex: 0.3,
            marginVertical: theme.spacing.L,
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
        boardContainer: {
            flex: 1 / 2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cellStyle: {
            height: 345 / 3,
            width: 345 / 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
        },
        titleText: {
            fontFamily: 'Cormorant-Bold',
            textAlign: 'center',
            fontSize: 35,
            margin: 15,
            color: theme.color.grey,
        },
        labelText: { fontFamily: 'Cormorant-Bold', fontSize: 25, color: 'black' },

        appButtonContainer: {
            elevation: 8,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
        },
        appButtonText: {
            fontSize: 18,
            color: theme.color.appBackground,
            fontWeight: 'bold',
            alignSelf: 'center',
            textTransform: 'uppercase',
        },
    });
    return styles;
};
