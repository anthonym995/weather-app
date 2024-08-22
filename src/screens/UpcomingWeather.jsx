import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItems from "../components/ListItems";


const UpcomingWeather = ({weatherData}) => {
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
      <ImageBackground
        style={styles.image}
        source={require("../../assets/up-bg.jpg")}
      >
        <Text style={styles.title}>Upcoming weather</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
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
    color: "white",
    marginBottom: 20,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
