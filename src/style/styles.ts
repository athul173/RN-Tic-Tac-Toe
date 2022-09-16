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

        paddingContainer: {
            flex: 1,
            backgroundColor: theme.color.appBackground,
            padding: 32,
        },
        contentScreen: {
            flex: 1,
            margin: theme.spacing.L,
            padding: theme.spacing.L,
            borderRadius: 15,
            backgroundColor: theme.color.primary,
        },
        posters: {
            backgroundColor: theme.color.cardBackground,
            borderBottomRightRadius: 240,
            padding: 20,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        column: {
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        labelText: { fontFamily: 'Cormorant-Bold', fontSize: 25, color: 'white' },
        defaultText: {
            fontFamily: 'Cormorant-Regular',
            fontSize: 16,
            color: theme.color.black,
        },
        descriptionText: {
            textAlign: 'center',
            fontFamily: 'Cormorant-Bold',
            fontSize: 16,
            color: theme.color.black,
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 30,
            paddingHorizontal: 20,
            marginHorizontal: 30,
            marginBottom: 20,
        },
        appButtonContainer: {
            elevation: 8,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
        },
        appButtonText: {
            fontSize: 18,
            color: '#fff',
            fontWeight: 'bold',
            alignSelf: 'center',
            textTransform: 'uppercase',
        },
        registerScreen: {
            margin: 80,
            flex: 1,
            backgroundColor: theme.color.appBackground,
            alignContent: 'center',
        },
    });
    return styles;
};
