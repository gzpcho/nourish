import React from 'react';
import { StyleSheet, Text as TextRN } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  heading: {
    fontSize: 24,
  },
  subheading: {
    fontSize: 16,
  },
  error: {
    color: '#FF0033',
    fontSize: 12,
  },
  button: {
    color: '#FFFFFF',
  },
});

const Text = ({ type, children }) => {
  const style = [
    styles.text,
    type === 'heading' && styles.heading,
    type === 'subheading' && styles.subheading,
    type === 'button' && styles.button,
    type === 'error' && styles.error,
  ];

  return <TextRN style={style}>{children}</TextRN>;
};

export default Text;
