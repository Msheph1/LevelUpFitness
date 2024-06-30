import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text>Calistetics Skills</Text>
    </View>
      <View 
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
 >
        <Text>Horizontal Pull</Text>
        <Text>Vertical Pull</Text>
        <Text>Vertical Push</Text>
        <Text>Horizonal Push</Text>
        <Text>Core</Text>
        <Text>Legs</Text>
      </View>
      </View>
  );
}
