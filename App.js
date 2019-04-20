/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Autocode from "./logos/autocode.svg";
import Bower from "./logos/bower.svg";
import Composer from "./logos/composer.svg";
import Drupal from "./logos/drupal.svg";
import Egghead from "./logos/egghead.svg";
import Ember from "./logos/ember.svg";
import Hostgator from "./logos/hostgator.svg";
import Pug from "./logos/pug.svg";
import ReduxObservable from "./logos/redux-observable.svg";
import RubyMine from "./logos/rubymine.svg";
import Snyk from "./logos/snyk.svg";
import Stylelint from "./logos/stylelint.svg";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.containerStyles}
        >
          <Bower style={styles.logo} />
          <Snyk style={styles.logo} />
          <Drupal style={styles.logo} />
          <Composer style={styles.logo} />
          <Ember style={styles.logo} />
          <Autocode style={styles.logo} />
          <Egghead style={styles.logo} />
          <Hostgator style={styles.logo} />
          <Pug style={styles.logo} />
          <Stylelint style={styles.logo} />
          <ReduxObservable style={styles.logo} />
          <RubyMine style={styles.logo} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  logo: {
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#efefef"
  },
  scrollView: {
    width: "100%"
  },
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
