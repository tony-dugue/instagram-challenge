import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native'

import colors from "../../config/colors";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/header-logo.png')} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>

        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')} >
          <Image style={styles.icon} source={require('../../assets/plus-2-math.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/like.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>

          <Image style={[styles.icon, styles.iconMessage]} source={require('../../assets/direct-message.png')}/>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  iconMessage: {
    width: 25,
    height: 25,
    marginTop: 1,
    transform: [{ rotate: '20deg' }]
  },
  unreadBadge: {
    backgroundColor: colors.redBadge,
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
  unreadBadgeText: {
    color: colors.text,
    fontWeight: '600',
  }
})

export default Header
