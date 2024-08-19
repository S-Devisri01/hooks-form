import React from 'react';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';

const CustomInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <FormControl mb={4} textAlign="center">
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width="50%"
        mx="auto"
      />
    </FormControl>
  );
};

export default CustomInput;
