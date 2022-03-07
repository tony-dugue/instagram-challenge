import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'

import colors from "../../config/colors";

const AddNewPostHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>

      <Text style={styles.headerText}>Nouvelle publication</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25
  }
})

export default AddNewPostHeader
