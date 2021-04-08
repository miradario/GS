import * as React from "react";
import BaseContainer from "../components/BaseContainer";
import { StatusBar, View, Text } from "react-native";
import ListMeditate from "../components/ListMeditate";

export default class Meditate extends React.Component<ScreenProps<>> {
  constructor() {
    super();
    this.state = {
      meditations: [],
      favourites: [],
      rerender: false,
      connected: true,
    };
  }

  async componentDidMount() {
    //const connected = await checkInternetConnection();
    //this.setState({ connected });

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      const reload = this.props.navigation.getParam("reload", false);
      if (reload) {
        this.setState({ rerender: true });
      }
    });
  }

  render() {
    return (
      <BaseContainer title={"Meditate"}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <ListMeditate
          navigation={this.props.navigation}
          cat={["Mindfulness", "Sleep", "Music", "Walk"]}
          initialCat={0}
          rerender={this.state.rerender}
        ></ListMeditate>
      </BaseContainer>
    );
  }
}
