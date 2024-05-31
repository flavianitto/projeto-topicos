import React from 'react';
import { Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const StyledText = ({ children, style, size, weight, ...props }) => {
  const theme = useTheme();
  const fontSize = theme.fontSizes[size] || theme.fontSizes.normal;
  const fontWeight = theme.fontWeight[weight] || theme.fontWeight.regular
  
  return (
    <Text style={[{ fontSize, fontWeight}, style]} {...props}>
      {children}
    </Text>
  );
};

export default StyledText;