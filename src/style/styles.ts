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
        cellOSymbol: {
            fontSize: 80,
            color: theme.color.blue,
        },
        cellXSymbol: {
            fontSize: 80,
            color: theme.color.red,
        },
        titleText: {
            fontFamily: 'Cormorant-Bold',
            textAlign: 'center',
            fontSize: 45,
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
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
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
        symbolSelectorView: {
            flexDirection: 'row',
            marginVertical: theme.spacing.L,
        },
        roundedBtnView: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing.L,
        },
        roundedBtn: {
            width: 50,
            marginHorizontal: theme.spacing.L,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
        },
    });
    return styles;
};
