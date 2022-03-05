import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native'

const postFooterIcons = [
  { name: 'Like', image: require('../../assets/like.png'), likedImage: require('../../assets/liked.png')},
  { name: 'Comment', image: require('../../assets/comment.png')},
  { name: 'Share', image: require('../../assets/direct-message.png')},
  { name: 'Bookmark', image: require('../../assets/bookmark.png')},
]

const PostFooter = () => (
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
  }
})

export default PostFooter
