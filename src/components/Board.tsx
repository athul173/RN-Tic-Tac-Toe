import { View, Text } from "react-native";
import React from "react";
import { useStyles } from "../style/styles";
import { Cell } from ".";

const Board = () => {
  const styles = useStyles();

  return (
    <View style={styles.boardContainer}>
      {[...Array(3)].map((item) => {
        return (
          <View style={{ flexDirection: "row" }}>
            {[...Array(3)].map((item) => {
              return <Cell />;
            })}
          </View>
        );
      })}
    </View>
  );
};

export default Board;
