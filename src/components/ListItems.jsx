import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ListItems = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, left, date, temp } = styles;
  return (
    <View style={item}>
      <View style={left}>
        <Feather name={"sun"} size={50} color={"black"} />
      </View>
      <View>
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 4,
    borderColor: "blue",
    backgroundColor: "lightblue",
  },
  left: {
    marginRight: 10,
  },
  date: {
    fontSize: 20,
    color: "black",
  },
  temp: {
    fontSize: 15,
    color: "blue",
  },
});

export default ListItems;
