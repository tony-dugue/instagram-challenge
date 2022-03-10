import React from 'react';
import { View, StyleSheet } from 'react-native'

import AddNewPostHeader from "./AddNewPostHeader";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddNewPostHeader navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  }
})

export default AddNewPost
