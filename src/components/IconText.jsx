import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, iconColor, iconSize, bodyText, bodyTextStyles } = props;
  const { container, bodyTextTheme } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[bodyTextTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
  },
  bodyTextTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
