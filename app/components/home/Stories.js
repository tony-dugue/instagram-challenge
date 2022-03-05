import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native'

// Data
import colors from "../../config/colors";
import users from '../../data/users'

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        { users.map( (user) => (
          <View key={user.id} style={styles.storyContainer}>
            <Image style={styles.storyImage} source={user.image}/>
            <Text style={styles.storyPseudo}>
              {user.pseudo.length > 10
                ? user.pseudo.slice(0, 9).toLowerCase() + '...'
                : user.pseudo.toLowerCase()}
            </Text>
          </View>
        ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 13
  },
  storyContainer: {
    alignItems: 'center'
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: colors.avatarBorder
  },
  storyPseudo: {
    color: colors.white
  }
})

export default Stories

