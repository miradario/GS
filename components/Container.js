// @flow
import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import type { BaseProps } from "./Types";

import COLORS from "../assets/Colors";

type ContainerProps = BaseProps & {
  safe?: boolean,
  children: React.Node,
};

export default class Container extends React.PureComponent<ContainerProps> {
  render(): React.Node {
    const { children, style, safe } = this.props;
    const containerStyle = [style, styles.base];
    if (safe) {
      return <SafeAreaView style={containerStyle}>{children}</SafeAreaView>;
    }
    return <View style={containerStyle}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 0,
  },
});
