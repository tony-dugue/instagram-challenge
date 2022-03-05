import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'

import colors from "../config/colors";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
})

export default HomeScreen
