import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

// Data
import colors from "../../config/colors";
import users from '../../data/users'

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        { users.map( (user) => (
          <View key={user.id} style={styles.storyContainer}>

            <LinearGradient
              colors={['#6611f5', '#ff009c', '#ff7700']}
              start={{x: 0, y: 0}}
              locations={[0, 0.5, 1]}
              end={{x: 0.5, y: 1}}
              style={styles.linearGradient}>
              <View style={[styles.storyImageContainer, {borderRadius: 75}]}>
                <Image style={styles.storyImage} source={user.image}/>
              </View>
            </LinearGradient>

            <Text style={styles.storyPseudo}>
              {user.pseudo.length > 11
                ? user.pseudo.slice(0, 10).toLowerCase() + '...'
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
    marginBottom: 13,
    marginTop: 5
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 10,
  },

  // linear gradient

  linearGradient: {
    height: 80,
    width: 80,
    borderRadius: 40, // <-- Outer Border Radius
  },
  storyImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3, // <-- Border Width
    backgroundColor: colors.black,  // contour noir entre image et gradient
  },

  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  storyPseudo: {
    marginTop: 5,
    color: colors.white,
    fontSize: 14
  },
})

export default Stories

