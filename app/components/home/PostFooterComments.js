import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const PostFooterComments = ({ post, setCommentVisible, commentVisible }) => (
  <TouchableOpacity style={styles.container} onPress={() => setCommentVisible(!commentVisible)}>
    {/* mettre les !! pour transformer en true / false sinon, length de 0 renvoi une erreur */}
    { !!post.comments.length && (
      <Text style={{ color: 'gray' }}>
        Voir { post.comments.length > 1 ? `les ${post.comments.length} commentaires` : '1 commentaire'}
      </Text>
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 7
  }
})

export default PostFooterComments
