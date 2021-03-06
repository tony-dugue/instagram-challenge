import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable, Alert} from 'react-native'

import colors from "../../config/colors";

// Formik
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

// Firebase
import { auth, db } from '../../../firebase'

const SignupForm = ({ navigation }) => {

  const signupFormSchema = Yup.object().shape({
    email: Yup.string().email().required('Un email est requis'),
    username: Yup.string().required().min(2, "Un nom d'utilisateur est requis"),
    password: Yup.string().required().min(6, 'Votre mot de passe doit faire au moins 6 caractères')
  })

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(email, password)
      console.log("🔥 Firebase User Created successfully", email, password)

      await db.collection('users')
        .doc(authUser.user.email)
        .set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture()
      })

    } catch(error) {
      Alert.alert('🔥 Une erreur s\'est produite', error.message)
    }
  }

  return (
    <View style={styles.wrapper}>

      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        onSubmit={ values => onSignup(values.email, values.password, values.username)}
        validationSchema={signupFormSchema}
        validateOnMount={true}
      >

        { ({
             handleBlur,
             handleChange,
             handleSubmit,
             values,
             errors,
             isValid
           }) => (
          <>
            <View style={[
              styles.inputField,
              { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder="Adresse mail"
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={[
              styles.inputField,
              { borderColor: 1 > values.username.length || values.username.length > 1 ? '#ccc' : 'red'}
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder="Nom d'utilisateur"
                autoCapitalize='none'
                textContentType='username'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>

            <View style={[
              styles.inputField,
              { borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'}
            ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder="Mot de passe"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <Pressable titleSize={20} style={styles.submitButton(isValid)} disabled={!isValid} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Créer un compte</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Vous avez déjà un compte ?</Text>

              <TouchableOpacity onPress={ () => navigation.goBack()} >
                <Text style={{ color: '#6BB0F5' }}>{" "}Se connecter</Text>
              </TouchableOpacity>
            </View>

          </>
        )}

      </Formik>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1
  },
  forgotLinkContainer: {
    alignItems: 'flex-end',
    marginBottom: 30
  },
  forgotLink: {
    color: '#6BB0F5'
  },
  submitButton: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop: 40
  }),
  submitButtonText: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 20
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
})

export default SignupForm

