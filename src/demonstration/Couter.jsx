import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log(count);

    return () => {
      console.log("useEffect cleanup");
    };
  }, [count]);

  const { container, title } = styles;
  return (
    <View style={container}>
      <Text style={title}>{`Count: ${count}`}</Text>
      <Button color={"red"} title={"Increase the count"} onPress={() => setCount(count + 1)} />
      <Button color={"green"} title={"Decrese the count"} onPress={() => setCount(count - 1)} />
      <Button color={"red"} title={"Increase the count"} onPress={() => setNewCount(count + 1)} />
      <Button color={"green"} title={"Decrese the count"} onPress={() => setNewCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    fontSize: 25,
    fontWeight: "semibold",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});

export default Counter;
