import React from "react";
import Pulse from "react-native-pulse";
import { View, StyleSheet, Dimensions } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Pulse
          color="#008a00"
          numPulses={5}
          diameter={1000}
          speed={5}
          duration={3000}
        />
        <Pulse
          color="#ffff01"
          numPulses={10}
          diameter={500}
          speed={10}
          duration={2000}
        />
        <Pulse
          color="#F6F62F"
          numPulses={10}
          diameter={500}
          speed={5}
          duration={1000}
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
    height: height,
    // paddingTop: 400,
  },
});
