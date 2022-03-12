import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native'

import colors from "../../config/colors";

import { auth } from '../../../firebase'

import PostFooterComments from "./PostFooterComments";

const postFooterIcons = [
  { name: 'Like', image: require('../../assets/like.png'), likedImage: require('../../assets/liked.png')},
  { name: 'Comment', image: require('../../assets/comment.png')},
  { name: 'Share', image: require('../../assets/direct-message.png')},
  { name: 'Bookmark', image: require('../../assets/bookmark.png')},
]

const PostFooter = ({ handleLike, post }) => {

  const [commentVisible, setCommentVisible] = useState(false)

  return (
    <>
      <View style={{flexDirection: 'row'}}>

        <View style={styles.leftFooterIconsContainer}>

          <TouchableOpacity onPress={ () => handleLike(post) }>
            <Image
              style={{width: 28, height: 28}}
              source={post.likes_by_users.includes(auth.currentUser.email) ? postFooterIcons[0].likedImage : postFooterIcons[0].image}
            />
          </TouchableOpacity>

          <Icon imgStyle={{width: 22, height: 22, marginTop: 4}} imgUrl={postFooterIcons[1].image}/>
          <Icon imgStyle={{width: 22, height: 22, marginTop: 3, transform: [{rotate: '20deg'}]}} imgUrl={postFooterIcons[2].image}/>
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Icon imgStyle={{width: 23, height: 23, marginTop: 3}} imgUrl={postFooterIcons[3].image}/>
        </View>

      </View>

      <Text style={styles.footerLikes}>{post.likes_by_users.length.toLocaleString('fr')} J'aime</Text>

      <Text style={styles.footerUser}>
        <Text style={{fontWeight: '600'}}>{post.user}</Text>
        <Text>{" "}{post.caption}</Text>
      </Text>

      <PostFooterComments post={post} commentVisible={commentVisible} setCommentVisible={setCommentVisible} />

      { commentVisible && (
        <>
          {post.comments.map((comment, index) => (
              <View key={index} style={{marginTop: 7}}>
                <Text style={styles.footerUser}>
                  <Text style={{fontWeight: '600'}}>{comment.user}</Text>
                  <Text>{" "}{comment.comment}</Text>
                </Text>
              </View>
          ))}
        </>
      )}

    </>
  )
}

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl}/>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '28%',
    justifyContent: 'space-between',
  },
  footerLikes: {
    color: colors.text,
    fontWeight: '600',
    marginTop: 10
  },
  footerUser: {
    color: colors.text,
    marginTop: 5
  }
})

export default PostFooter
