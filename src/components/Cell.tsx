import { View, Text } from "react-native";
import React from "react";
import { useStyles } from "../style/styles";

const Cell = () => {
  const styles = useStyles();

  return (
    <View style={styles.cellStyle}>
      <Text style={{ fontSize: 80 }}></Text>
    </View>
  );
};

export default Cell;
