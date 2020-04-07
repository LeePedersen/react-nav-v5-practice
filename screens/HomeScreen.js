import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../context";

export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Master List Screen</Text>
    <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});
