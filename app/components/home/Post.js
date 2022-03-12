import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Divider } from "react-native-elements";

import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

import { db, auth, firebase } from '../../../firebase'

const Post = ({ post }) => {

  const handleLike = post => {
    // si le user est présent dans le tableau des likes, on retourne false et sinon true
    const currentLikeStatus = !post.likes_by_users.includes(auth.currentUser.email)

    db.collection('users')
      .doc(post.owner_email)
      .collection('posts')
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)  // push dans le array likes_by_users
          : firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email) // remove dans le array likes_by_users
      })
      .then( () => { console.log('Le document a été mis à jour avec succès !!')})
      .catch( error => console.log('Une erreur s\'est produite', error))
  }

  return (
    <View style={styles.container}>
      <Divider width={1} orientation='vertical' />

      <PostHeader post={post} />

      <View style={styles.postImageContainer}>
        <Image source={{uri: post.imageUrl}} style={styles.postImage} />
      </View>

      <View style={styles.postFooter}>
        <PostFooter post={post} handleLike={handleLike} />
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
