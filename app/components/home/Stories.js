import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native'

// Data
import colors from "../../config/colors";
import users from '../../data/users'

import AvatarRoundWithGradient from "../elements/AvatarRoundWithGradient";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        { users.map( (user) => (
          <View key={user.id} style={styles.storyContainer}>

            <AvatarRoundWithGradient image={user.image} size={0.8} borderWidth={2} />

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
    marginRight: 7,
  },
  storyPseudo: {
    marginTop: 5,
    color: colors.text,
    fontSize: 14
  },
})

export default Stories

