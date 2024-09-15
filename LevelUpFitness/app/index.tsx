import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Choose Your Discipline</Text>
      <View>
        <Text>Option 2</Text>
        <Text>Option 3</Text>
        <Text>Option 4</Text>
        <Text>Option 5</Text>
      </View>
    </View>
  );
}
