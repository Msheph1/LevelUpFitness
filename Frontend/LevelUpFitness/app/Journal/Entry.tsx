import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, Pressable } from "react-native";

const Entry = () => {
  return (
    <View style={{backgroundColor: 'gray', width: 200 , height: 200}}>
      <Text>Exercise</Text>
      <View style={{  }}>
        <Pressable style={{backgroundColor: 'aqua'}}>
          <Text> This is the button</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Entry;