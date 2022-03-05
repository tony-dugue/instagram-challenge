import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native'

import colors from "../config/colors";
import posts from "../data/posts";

import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />

      <ScrollView>
        { posts.map( (post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default HomeScreen
