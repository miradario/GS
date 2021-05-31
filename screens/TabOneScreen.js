import React from "react";
import Pulse from "react-native-pulse";
import { View, StyleSheet, Dimensions } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pulse
          color="lime"
          numPulses={5}
          diameter={1000}
          speed={60}
          duration={3000}
        />
        <Pulse
          color="#ffff01"
          numPulses={5}
          diameter={1000}
          speed={60}
          duration={3000}
        />
        <Pulse
          color="lime"
          numPulses={5}
          diameter={100}
          speed={60}
          duration={3000}
        />
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");
const SIZE = width;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "lime",
    justifyContent: "center",
    alignItems: "center",
    width: SIZE,
    height: height - 105,
    // paddingTop: 400,
  },
});
