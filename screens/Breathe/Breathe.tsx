/*
I am using expo and rc.2 and ran into this issue suddenly. After reading this thread and this, I tried everything and the only workaround working is commenting out _setGlobalConsole(console) in node_modules/react-native-reanimated/src/reanimated2/core.js.
This comment is for those who are still struggling with this issue and not able to proceed like me. :)
Note: updating the package or reinstalling node_modules will reintroduce the issue until its fixed in react-native-reanimated
*/
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { mix } from "react-native-redash";

import Circle from "./Circle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
const Breathe = () => {
  const progress = useSharedValue(0);
  const goesDown = useSharedValue(false);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(
        1,
        { duration: 3000, easing: Easing.bezier(0.5, 0, 0.5, 1) },
        () => (goesDown.value = !goesDown.value)
      ),
      -1,
      true
    );
  }, [goesDown, progress]);
  const style = useAnimatedStyle(() => ({
    flex: 1,
    //transform: [{ rotate: mix(progress.value, -Math.PI, 0) }],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={style}>
        {new Array(6).fill(0).map((_, index) => (
          <Circle
            progress={progress}
            index={index}
            key={index}
            goesDown={goesDown}
          />
        ))}
      </Animated.View>
    </View>
  );
};

export default Breathe;
