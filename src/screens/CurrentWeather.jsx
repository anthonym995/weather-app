import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "./../utils/styles";
import c from "./../utils/c";
import bc from "./../utils/bc";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";

const CurrentWeather = () => {
  const { wrapper, container, bgImage, title, temp, feels, highLowWrapper, highLow, description, message } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground style={bgImage} source={require("../../assets/bg.jpg")}>
        <View style={container}>
          <Text style={title}>Current Weather</Text>
          <Feather style={u.textCenter} name="sun" color="white" size={100} />
          <Text style={temp}>6</Text>
          <Text style={feels}>Feels like 5</Text>
          <RowText
            messageOne={"High: 6"}
            messageTwo={"Low: 6"}
            messageOneStyles={[highLow, c.textBlue700]}
            messageTwoStyles={[highLow, c.textBlue700]}
            containerStyles={[highLowWrapper, bc.blue300, u.shadow]}
          />
        </View>
        <RowText
          messageOne={"It's Sunny"}
          messageTwo={"It's perfect T-shirt weather"}
          messageOneStyles={[description, c.textGray300, u.textCenter]}
          messageTwoStyles={[message, c.textGray300, u.textCenter]}
          containerStyles={[u.p4]}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  temp: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 10,
  },
  feels: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  highLowWrapper: {
    width: "full",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "lightgray",
    borderWidth: 1,
    margin: 20,
    padding: 8,
  },
  highLow: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CurrentWeather;
