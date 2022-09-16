import { StyleSheet } from "react-native";
import { useTheme } from "./themes";

export const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.appBackground,
    },
    headerContainer: {
      flex: 1 / 4,
    },
    boardContainer: {
      flex: 1 / 2,
      justifyContent: "center",
      alignItems: "center",
    },
    cellStyle: {
      height: 345 / 3,
      width: 345 / 3,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
    },
    titleText: {
      fontFamily: "Cormorant-Bold",
      textAlign: "center",
      fontSize: 35,
      margin: 15,
      color: theme.color.grey,
    },
  });
  return styles;
};
