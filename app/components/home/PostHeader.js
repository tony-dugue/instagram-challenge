import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

import colors from "../../config/colors";

import AvatarRoundWithGradient from "../elements/AvatarRoundWithGradient";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.postHeaderContainer}>

      <View style={styles.avatarContainer}>
        <AvatarRoundWithGradient image={{uri: post.profilePicture}} size={0.4} borderWidth={2} />
        <Text style={styles.postHeaderText}>{post.user}</Text>
      </View>

      <Text style={{ color: colors.white, fontWeight: '900'}}> ... </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  postHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 14
  },
  postHeaderText: {
    color: colors.text,
    marginLeft: 5,
    fontWeight: '700',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default PostHeader
