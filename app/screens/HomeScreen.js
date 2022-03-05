import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'

import colors from "../config/colors";
import Header from "../components/home/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
})
