import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Divider } from "react-native-elements";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation='vertical' />

      <PostHeader post={post} />

      <View style={styles.postImageContainer}>
        <Image source={post.imageUrl} style={styles.postImage} />
      </View>

      <View style={styles.postFooter}>
        <PostFooter post={post} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  postImageContainer: {
    width: '100%',
    height: 450
  },
  postImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  postFooter: {
    marginHorizontal: 15,
    marginTop: 10
  }
})

export default Post
