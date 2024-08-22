import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utils/weatherType";
import moment from "moment";
import u from "../utils/styles";

const ListItems = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, left, date, temp, dataWrapper } = styles;
  return (
    <View style={item}>
      <View style={[left, u.shadow]}>
        <Feather name={weatherType[condition]?.icon} size={50} color={"blue"} />
      </View>
      <View style={dataWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
    fontSize: 25,
    color: "blue",
  },
  dataWrapper: {
    flexDirection: "column",
  },
});

export default ListItems;
