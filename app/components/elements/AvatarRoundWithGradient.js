import React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import colors from "../../config/colors";

const AvatarRoundWithGradient = ({ image, size = 1, borderWidth = 3 }) => {
  return (
    <LinearGradient
      colors={['#6611f5', '#ff009c', '#ff7700']}
      start={{x: 0, y: 0}}
      locations={[0, 0.5, 1]}
      end={{x: 0.5, y: 1}}
      style={{
        height: 80 * size,
        width: 80 * size,
        borderRadius: 40 * size, // <-- Outer Border Radius
      }}>
      <View style={[styles.storyImageContainer, {borderRadius: 75, margin: borderWidth}]}>
        <Image source={image} style={{ width: 65 * size, height: 65 * size, borderRadius: 50 }} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  storyImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3, // <-- Border Width
    backgroundColor: colors.background,  // contour noir entre image et gradient
  }
})

export default AvatarRoundWithGradient
