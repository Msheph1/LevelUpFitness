import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Entry from "./entry";

const Index = () => {
  return (
    <View>
    <Entry></Entry>
    <Entry></Entry>
    <Pressable >
      <Text>+</Text>
    </Pressable>
    </View>

  );
};

export default Index;
