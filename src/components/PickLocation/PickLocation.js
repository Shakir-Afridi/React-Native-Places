import React, { Component } from "react";
import { View, Image, StyleSheet, Button, Text } from "react-native";

import ImagePlaceholder from "../../assests/back.png";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate me" onPress={() => alert("Pick Location")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
