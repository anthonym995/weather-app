import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({ weatherData }) => {
  const {
    container,
    image,
    cityText,
    cityName,
    countryName,
    popWrapper,
    popText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../../assets/city-bg.jpg")}
      >
        <View>
          <Text style={[cityText, cityName]}>{name}</Text>
          <Text style={[cityText, countryName]}>{country}</Text>
        </View>
        <View style={[popWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconSize={50}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={popText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconSize={50}
            iconColor={"white"}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconSize={50}
            iconColor={"white"}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  cityName: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: StatusBar.currentHeight || 0,
    color: "red",
  },
  countryName: {
    fontSize: 30,
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
    borderRadius: 100,
    color: "blue",
  },
  popWrapper: {
    marginTop: 30,
    justifyContent: "center",
  },
  popText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    marginLeft: 7.5,
    marginTop: 10,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
