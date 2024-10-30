import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";

interface expBarProps {
  level: string;
  exp: number;
}

const ExpBar = (props: expBarProps) => {
  return (
    <>
      <Text>Level: {props.level}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: 20,
          width: "100%",
        }}
      >
        <Text style={{ marginRight: 10 }}>0 EXP</Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "60%",
          }}
        >
          <View
            style={{
              height: 20,
              width: "100%",
              backgroundColor: "#e0e0e0",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <View
              style={[
                {
                  height: "100%",
                  backgroundColor: "#3b82f6",
                },
                { width: `${(props.exp / 10000) * 100}%` },
              ]}
            />
          </View>
        </View>
        <Text style={{ marginLeft: 10 }}>10000 EXP</Text>
      </View>
      <Text style={{ textAlign: "center" }}>{props.exp}</Text>
    </>
  );
};

export default ExpBar;
