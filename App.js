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
          <Bower width={256} height={225} style={styles.logo} />
          <Snyk width={256} height={419} style={styles.logo} />
          <Drupal width={256} height={295} style={styles.logo} />
          <Composer width={256} height={339} style={styles.logo} />
          <Ember width={256} height={245} style={styles.logo} />
          <Autocode width={256} height={241} style={styles.logo} />
          <Egghead width={256} height={263} style={styles.logo} />
          <Hostgator width={256} height={348} style={styles.logo} />
          <Pug width={256} height={256} style={styles.logo} />
          <Stylelint width={256} height={245} style={styles.logo} />
          <ReduxObservable width={256} height={250} style={styles.logo} />
          <RubyMine width={256} height={256} style={styles.logo} />
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
    alignItems: "center"
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
