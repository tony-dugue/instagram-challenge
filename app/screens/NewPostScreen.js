import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'

import colors from "../config/colors";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default NewPostScreen
