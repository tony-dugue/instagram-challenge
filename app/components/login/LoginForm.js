import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable} from 'react-native'

import colors from "../../config/colors";

// Formik
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const LoginForm = () => {

  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('Un email est requis'),
    password: Yup.string().required().min(6, 'Votre mot de passe doit faire au moins 8 caractères')
  })

  return (
    <View style={styles.wrapper}>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={ values => console.log(values)}
        validationSchema={loginFormSchema}
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
                  placeholder="Num. téléphone, nom d'utilisateur ou e-mail"
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

              <View style={styles.forgotLinkContainer}>
                <Text style={styles.forgotLink}>Mot de passe oublié ?</Text>
              </View>

              <Pressable titleSize={20} style={styles.submitButton(isValid)} disabled={!isValid} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Se connecter</Text>
              </Pressable>

              <View style={styles.signupContainer}>
                <Text>Vous n'avez pas de compte ?</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#6BB0F5' }}>{" "}Inscrivez-vous</Text>
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
    borderRadius: 4
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

export default LoginForm
