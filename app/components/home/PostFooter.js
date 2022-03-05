import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native'
import colors from "../../config/colors";

const postFooterIcons = [
  { name: 'Like', image: require('../../assets/like.png'), likedImage: require('../../assets/liked.png')},
  { name: 'Comment', image: require('../../assets/comment.png')},
  { name: 'Share', image: require('../../assets/direct-message.png')},
  { name: 'Bookmark', image: require('../../assets/bookmark.png')},
]

const PostFooter = ({ post }) => (
  <>
    <View style={{ flexDirection: 'row' }}>

      <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={{ width: 28, height: 28 }} imgUrl={postFooterIcons[0].image} />
        <Icon imgStyle={{ width: 22, height: 22, marginTop: 4 }} imgUrl={postFooterIcons[1].image} />
        <Icon imgStyle={{ width: 22, height: 22, marginTop: 3, transform: [{ rotate: '20deg' }] }} imgUrl={postFooterIcons[2].image} />
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <Icon imgStyle={{ width: 23, height: 23, marginTop: 3 }} imgUrl={postFooterIcons[3].image} />
      </View>

    </View>

    <Text style={styles.footerLikes}>{post.likes.toLocaleString('fr')} J'aime</Text>

    <Text style={styles.footerCaption}>
      <Text style={{ fontWeight: '600' }}>{post.user}</Text>
      <Text>{" "}{post.caption}</Text>
    </Text>
  </>
)

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
  footerCaption: {
    color: colors.text,
    marginTop: 5
  }
})

export default PostFooter
