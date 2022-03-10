import React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import colors from "../config/colors";
import LoginForm from "../components/login/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={require('../assets/instagram-logo.png')} style={styles.logo}/>
      </View>

      <LoginForm />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60
  },
  logo: {
    width: 100,
    height: 100
  }
})

export default LoginScreen
