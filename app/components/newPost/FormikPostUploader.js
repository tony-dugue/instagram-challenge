import React, {useState} from 'react';
import * as Yup from 'yup'
import { Formik } from 'formik'

const PLACEHOLDER_IMG = '../../assets/placeholder.png';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Une url est requise'),
  caption: Yup.string().max(2200, 'La légende a atteint la limite de caractères')
})

const FormikPostUploader = () => {

  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={ values => console.log(values)}
      validationSchema={uploadPostSchema}
    >

      { ({
           handleBlur,
           handleChange,
           handleSubmit, values,
           errors,
           isValid
      }) => (
        <>

        </>
      )}

    </Formik>
  );
}

export default FormikPostUploader
