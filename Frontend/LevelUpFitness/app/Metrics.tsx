import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";

interface metricsProps {
  weight: string;
  weightUnits: string;
  height: string;
  heightUnits: string;
  bodyFat: string;
}

const Metrics = (props: metricsProps) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingRight: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text>Weight</Text>
          <TextInput style={styles.textInput} value={props.weight} />
          <Text>{props.weightUnits}</Text>
        </View>
        <View
          style={{
            paddingRight: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text>Height</Text>
          <TextInput style={styles.textInput} value={props.height} />
          <Text>{props.heightUnits}</Text>
        </View>
        <View
          style={{
            paddingRight: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text>Body Fat</Text>
          <TextInput style={styles.textInput} value={props.bodyFat} />
          <Text>%</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    textAlign: "center",
    maxWidth: 50,
    borderWidth: 2,
    marginRight: 5,
    marginLeft: 5,
  },
});

export default Metrics;
