import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "./../utils/styles";
import c from "./../utils/c";
import bc from "./../utils/bc";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    bgImage,
    title,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    description,
    message,
  } = styles;
  console.log(weatherData);

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <ImageBackground style={bgImage} source={require("../../assets/bg.jpg")}>
        <View style={container}>
          <Text style={title}>Current Weather</Text>
          <Feather
            style={u.textCenter}
            name={weatherType[weatherCondition].icon}
            color="white"
            size={100}
          />
          <Text style={tempStyles}>{temp}</Text>
          <Text style={feels}>{`Feels like ${feels_like}`}</Text>
          <RowText
            messageOne={`High: ${temp_max}`}
            messageTwo={`Low: ${temp_min}`}
            messageOneStyles={[highLow, c.textBlue700]}
            messageTwoStyles={[highLow, c.textBlue700]}
            containerStyles={[highLowWrapper, bc.blue300, u.shadow]}
          />
        </View>
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
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
  },
  bgImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    marginTop: StatusBar.currentHeight || 0,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  tempStyles: {
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
