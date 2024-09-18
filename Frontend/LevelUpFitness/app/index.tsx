import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import React, {useState} from "react"


 const Index = () => {
  const [level, setLevel] = useState('10');
  const [weight, setWeight] = useState('170');
  const [weightUnits, setWeightUnits] = useState('LBs');
  const [height, setHeight] = useState('69');
  const [heightUnits, setHeightUnits] = useState('Inches');
  const [bodyFat, setBodyFat] = useState('15');
  const [exp, setExp] = useState(5360);


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >


      <Text>Level Up Fitness</Text>
      <Text>Level: {level}</Text>
      <View>
      <svg width="200" height="400">
        <circle cx="100" cy="50" r="30" stroke="black" fill="none" />
        <line x1="100" y1="80" x2="100" y2="200" stroke="black"  />
        <line x1="50" y1="120" x2="150" y2="120" stroke="black" />
        <line x1="100" y1="200" x2="60" y2="300" stroke="black"  />
        <line x1="100" y1="200" x2="140" y2="300" stroke="black" />
      </svg>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
        <View style={{
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Text>Weight</Text>
          <TextInput style={styles.textInput} value={weight}/>
          <Text>{weightUnits}</Text>
        </View>
        <View style={{
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Text>Height</Text>
          <TextInput style={styles.textInput} value={height}/>
          <Text>{heightUnits}</Text>
        </View>
        <View style={{
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Text>Body Fat</Text>
          <TextInput style={styles.textInput} value={bodyFat}/>
          <Text>%</Text>
        </View>
      </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          height: 20,
          width: '100%',
        }}>

          <Text style={{marginRight: 10}}>0 EXP</Text>
          <View style = {{
            display: 'flex',
            alignItems: 'center',
            width: '60%',

          }}>
            <View style={{
              height: 20,
              width: '100%',
              backgroundColor: '#e0e0e0',
              borderRadius: 10,
              overflow: 'hidden',
        }}>
            <View style={[
                  {
                  height: '100%',
                  backgroundColor: '#3b82f6',
                  
                  },
                  { width : `${exp/10000 * 100}%`}]} />
            </View>
            <Text style={{textAlign: 'center'}}>{exp}</Text>
          </View>
          <Text style={{marginLeft: 10}}>10000 EXP</Text>
        </View>
    </View>
  );
}



  const styles = StyleSheet.create({
    textInput: {
      textAlign: 'center',
      maxWidth: 50,
      borderWidth: 2,
      marginRight: 5,
      marginLeft: 5,
    },
  });

  export default Index;
