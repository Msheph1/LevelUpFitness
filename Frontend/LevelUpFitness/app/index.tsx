import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Challenge from "./Challenge";
import ExpBar from "./ExpBar";
import Metrics from "./Metrics";

const Index = () => {
  const [level, setLevel] = useState("10");
  const [weight, setWeight] = useState("170");
  const [weightUnits, setWeightUnits] = useState("LBs");
  const [height, setHeight] = useState("69");
  const [heightUnits, setHeightUnits] = useState("Inches");
  const [bodyFat, setBodyFat] = useState("15");
  const [exp, setExp] = useState(5360);
  const [username, setUsername] = useState("Null");
  const challengeOneContent: string = "this is a test challenge";

  const checkin = async () => {
    console.log("running");
    try {
      const result = await fetch("http://localhost:8080/3/addexp/500", {
        method: "POST",
      });
      loadUser();
    } catch (error) {
      console.log("checkin failed");
    }
  };

  const loadUser = async () => {
    console.log("loading user");
    try {
      const result = await fetch("http://localhost:8080/3");
      const json = await result.json();
      //setWeight(json.weight);
      //setWeightUnits(json.weightUnits);
      //setHeight(json.height);
      //setHeightUnits(json.heightUnits);
      //setBodyFat(json.bodyFat);
      const calcLevel = Math.floor(json.exp / 10000) + 1;
      setLevel(calcLevel.toString());
      const calcExp = json.exp % 10000;
      setExp(calcExp);
      setUsername(json.username);
    } catch (error) {
      console.log("fetch failed");
    }
  };
  loadUser();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Button title="Daily Checkin" onPress={checkin}></Button>
      <Text>Hello: {username}</Text>
      <Text>Level Up Fitness</Text>
      <View>
        <svg width="200" height="400">
          <circle cx="100" cy="50" r="30" stroke="black" fill="none" />
          <line x1="100" y1="80" x2="100" y2="200" stroke="black" />
          <line x1="50" y1="120" x2="150" y2="120" stroke="black" />
          <line x1="100" y1="200" x2="60" y2="300" stroke="black" />
          <line x1="100" y1="200" x2="140" y2="300" stroke="black" />
        </svg>
      </View>
      <Metrics
        weight={weight}
        weightUnits={weightUnits}
        height={height}
        heightUnits={heightUnits}
        bodyFat={bodyFat}
      />
      <ExpBar level={level} exp={exp} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
          gap: 40,
        }}
      >
        <Challenge content={challengeOneContent} xp={500} title="challenge1" />
        <Challenge content={challengeOneContent} xp={1000} title="challenge2" />
        <Challenge content={challengeOneContent} xp={750} title="challenge3" />
      </View>
    </View>
  );
};

export default Index;
