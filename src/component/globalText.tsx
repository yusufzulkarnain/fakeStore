import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

type CustomTextProps = {
  typeText?: 'bold' | 'regular' | 'italic';
  size?: number;
  children: React.ReactNode;
  style?: TextStyle;
};

const GlobalText: React.FC<CustomTextProps> = ({
  typeText = 'regular',
  size = 14,
  children,
  style,
}) => {
  return (
    <Text
      style={[styles.text, {fontSize: size}, getFontStyle(typeText), style]}>
      {children}
    </Text>
  );
};
const getFontStyle = (type: string): TextStyle => {
  switch (type) {
    case 'bold':
      return {fontFamily: 'Inter-Bold'};
    case 'italic':
      return {fontFamily: 'Inter-Italic'};
    default:
      return {fontFamily: 'Inter-Regular'};
  }
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

export default GlobalText;
