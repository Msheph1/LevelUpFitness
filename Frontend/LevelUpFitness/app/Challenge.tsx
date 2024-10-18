import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";

interface challengeProps {
  title?: string;
  xp?: number;
  content?: string;
}

const Challenge = (props: challengeProps) => {
  return (
    <View>
      <Text>Daily Challenge</Text>
      <Text>{props.title}</Text>
      <Text>{props.xp}</Text>
      <Text>{props.content}</Text>
      <Button title="Complete"></Button>
    </View>
  );
};

export default Challenge;
