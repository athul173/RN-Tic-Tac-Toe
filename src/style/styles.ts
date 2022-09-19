import { StyleSheet } from 'react-native';
import { useTheme } from './themes';

export const useStyles = (winningCombination?: boolean, size?: number) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.color.appBackground,
        },
        headerContainer: {
            flex: 1 / 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
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
            borderWidth: 1,
        },
        winningCell: {
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 5,
            borderWidth: 2,
            shadowColor: '#000',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            height: 345 / 3,
            width: 345 / 3,
        },
        cellOSymbol: {
            fontSize: 80,
            color: theme.color.oSymbol,
        },
        cellXSymbol: {
            fontSize: 80,
            color: theme.color.xSymbol,
        },
        titleText: {
            fontFamily: 'Cormorant-Bold',
            textAlign: 'center',
            fontSize: 40,
            marginVertical: 15,
            color: theme.color.grey,
        },
        labelText: { fontFamily: 'Cormorant-Bold', fontSize: 25, color: 'black' },
        winningsLabelText: {
            fontFamily: 'Cormorant-Bold',
            fontSize: 25,
            color: theme.color.primary,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            textDecorationStyle: 'double',
        },
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
        paddingContainer: {
            flex: 1,
            backgroundColor: theme.color.appBackground,
            padding: 32,
        },
        popUpView: {
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#00000050',
        },
        modalView: {
            margin: 20,
            flex: 1 / 3,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingVertical: 35,
            paddingHorizontal: 50,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        selectorView: {
            flexDirection: 'row',
            marginVertical: theme.spacing.xxl,
        },
        winningsView: {
            flex: 1,
            marginVertical: theme.spacing.xxl,
            alignItems: 'center',
            justifyContent: 'center',
        },
        winningLabelsView: {
            margin: theme.spacing.L,
            padding: theme.spacing.S,
        },
        roundedBtnView: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing.L,
        },
        roundedBtn: {
            width: 50,
            margin: theme.spacing.L,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
        },
        imageView: { width: size ? size : 120, height: size ? size : 120 },
    });
    return styles;
};
