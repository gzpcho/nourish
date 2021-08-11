import React from 'react';
import { View, StyleSheet, TextInput as TextInputRN } from 'react-native';
import { ErrorMessage } from 'formik';

import Text from './Text';

const TextInput = ({ field, ...props }) => {
  const { name, value, onChange, onBlur } = field;

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ marginRight: 4 }}>
          <Text>{props.precedingLabel}</Text>
        </View>
        <TextInputRN
          value={value?.toString()}
          onChangeText={onChange(field.name)}
          onBlur={onBlur(field.name)}
          autoCompleteType="off"
          autoCorrect={false}
          blurOnSubmit={true}
          style={styles.default}
          {...props}
        />
        <View style={{ marginLeft: 4 }}>
          <Text>{props.proceedingLabel}</Text>
        </View>
      </View>
      <ErrorMessage
        name={name}
        render={(msg) => <Text type="error">{msg}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontWeight: 12,
    marginVertical: 10,
    padding: 8,
    borderRadius: 4,
  },
});

export default TextInput;
