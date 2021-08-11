import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Field, Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid/non-secure';

import { pickPhotoAsync, takePhotoAsync } from '../utils/photo';
import { plantValidationSchema } from '../utils/plantValidation';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import theme from '../utils/theme';
import { withGlobalContext } from '../helpers/GlobalContext';

const PlantForm = ({ route, navigation, global }) => {
  const initialValues = {
    name: '',
    species: '',
    photoUri: '',
    waterFrequency: '',
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF9F6', margin: 8 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={plantValidationSchema}
        onSubmit={(values) => {
          global.addPlant({
            id: nanoid(),
            dateAdded: new Date(),
            lastWaterDate: new Date(),
            ...values,
          });
          navigation.goBack();
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Field name="name" component={TextInput} placeholder="Name" />
            <Field name="species" component={TextInput} placeholder="Species" />
            <Field
              name="waterFrequency"
              component={TextInput}
              keyboardType="numeric"
              precedingLabel="Water every"
              proceedingLabel="days"
            />

            <View style={{ marginVertical: 4 }}>
              <TouchableOpacity
                onPress={() => pickPhotoAsync(handleChange('photoUri'))}
                style={styles.button}
              >
                <Text type="button">Pick a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => takePhotoAsync(handleChange('photoUri'))}
                style={styles.button}
              >
                <Text type="button">Take a photo</Text>
              </TouchableOpacity>
              <ErrorMessage name="photoUri" />

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {values.photoUri.length ? (
                  <Image
                    source={{ uri: values.photoUri }}
                    style={{ width: 200, height: 200 }}
                  />
                ) : null}
              </View>
            </View>

            <Button title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: '#FFFFFF',
    backgroundColor: theme.colors.primary,
    margin: theme.margins.base,
    padding: theme.paddings.base,
    borderRadius: 8,
  },
});

export default withGlobalContext(PlantForm);
