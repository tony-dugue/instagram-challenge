import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, TextInput, View, Text, Button} from "react-native";
import * as Yup from 'yup'
import { Formik } from 'formik'
import colors from "../../config/colors";
import {Divider} from "react-native-elements";
import validUrl from 'valid-url'

import { db, auth, firebase } from '../../../firebase'

const PLACEHOLDER_IMG = '../../assets/placeholder.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Une url est requise'),
  caption: Yup.string().max(2200, 'La légende a atteint la limite de caractères')
})

const FormikPostUploader = ({ navigation }) => {

  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

  const getUsername = () => {
    const user = auth.currentUser

    const unsubscribe = db
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot( snapshot => snapshot.docs.map( doc => {
        setCurrentLoggedInUser({
          username: doc.data().username,
          profilePicture: doc.data().profile_picture
        })
      }))

    return unsubscribe
  }

  useEffect( () => {
    getUsername()
  }, [])

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection('users')
      .doc(auth.currentUser.email)
      .collection('posts')
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profilePicture: currentLoggedInUser.profilePicture,
        owner_uid: auth.currentUser.uid,
        owner_email: auth.currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: []
      })
      .then( () => navigation.goBack())

    return unsubscribe
  }

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={ values => uploadPostToFirebase(values.imageUrl, values.caption)}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >

      { ({
           handleBlur,
           handleChange,
           handleSubmit, values,
           errors,
           isValid
      }) => (
        <>
          <View style={styles.formContainer}>
            <Image
              source={thumbnailUrl ? { uri: validUrl.isUri(thumbnailUrl) } : require(PLACEHOLDER_IMG)}
              style={styles.image}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={styles.input}
                placeholder='Ecrire une légende'
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>

          </View>

          <Divider width={0.2} orientation='vertical' />

          <TextInput
            onChange={ e => setThumbnailUrl((e.nativeEvent.text))}
            style={[styles.input, { fontSize: 18, marginVertical: 15}]}
            placeholder="Saisir une url pour l'image"
            placeholderTextColor='gray'
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />

          { errors.imageUrl && <Text style={{ fontSize: 10, color: 'red' }}>{errors.imageUrl}</Text> }

          <Button onPress={handleSubmit} title='Publier' disabled={!isValid}/>
        </>
      )}

    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 100,
    height: 100
  },
  input: {
    color: colors.text,
    fontSize: 20
  }
})

export default FormikPostUploader
