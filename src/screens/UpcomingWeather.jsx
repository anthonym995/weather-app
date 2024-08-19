import React from "react";
import { SafeAreaView, Text, FlatList, StyleSheet, StatusBar, ImageBackground } from "react-native";
import ListItems from "../components/ListItems";

const DATA = [
  {
    dt_txt: "2022-08-30 16:00:00",
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 17:00:00",
    main: {
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-09-03 15:00:00",
    main: {
      temp_min: 294.14,
      temp_max: 294.14,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2022-09-03 16:00:00",
    main: {
      temp_min: 293.52,
      temp_max: 295.14,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2022-09-03 17:00:00",
    main: {
      temp_min: 293.11,
      temp_max: 294.89,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItems
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.image} source={require("../../assets/up-bg.jpg")}>
        <Text style={styles.title}>Upcoming Weather</Text>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
