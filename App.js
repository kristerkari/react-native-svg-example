/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Bower from "./logos/bower.svgx";
import Snyk from "./logos/snyk.svgx";
import Drupal from "./logos/drupal.svgx";
import Composer from "./logos/composer.svgx";
import Ember from "./logos/ember.svgx";

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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
});
