import React from 'react';
import { View, StyleSheet } from 'react-native'

import AddNewPostHeader from "./AddNewPostHeader";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <AddNewPostHeader />
      <FormikPostUploader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  }
})

export default AddNewPost
