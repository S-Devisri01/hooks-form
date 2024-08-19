// src/components/ColorThemeToggle.js
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ChakraProvider, 
  extendTheme, 
  useColorMode, 
  Box, 
  Button, 
  Input, 
  FormLabel, 
  FormControl, 
  Textarea, 
  useToast, 
  Switch, 
  VStack, 
  Select, 
  Checkbox, 
  Heading 
} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      light: {
        bg: '#f0f4f8',
        text: '#1a202c',
        inputBg: '#fff',
        buttonBg: '#6b7bde',
        buttonText: '#fff',
        selectBg: '#fff',
        borderColor: '#c6d0f5', // Unique color for border in light mode
      },
      dark: {
        bg: '#1a202c',
        text: '#f0f4f8',
        inputBg: '#2d3748',
        buttonBg: '#4b8ab4',
        buttonText: '#fff',
        selectBg: '#2d3748',
        borderColor: '#4b8ab4', // Unique color for border in dark mode
      },
    },
  },
});

const FormComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gender: '',
    interest: '',
    agreeTerms: false,
  });
  const formRef = useRef(null);

  const isFormValid = useMemo(() => {
    return Object.values(formData).every(value => 
      typeof value === 'boolean' ? value : value.trim() !== ''
    );
  }, [formData]);

  useEffect(() => {
    console.log(`Theme changed to: ${colorMode}`);
  }, [colorMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (!isFormValid) {
      toast({
        title: "Error",
        description: "Please fill out all fields and accept the terms.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formRef.current.querySelector('input:invalid')?.focus();
    } else {
      toast({
        title: "Success",
        description: "Form submitted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      ref={formRef} 
      bg={theme.colors.brand[colorMode].bg} 
      color={theme.colors.brand[colorMode].text} 
      p={8} 
      borderRadius="md" 
      maxWidth="500px" 
      margin="auto"
      borderWidth="2px" 
      borderColor={theme.colors.brand[colorMode].borderColor} // Border color applied here
    >
      <Heading as="h2" size="lg" mb="6" textAlign="center">
        Contact Us
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].inputBg} 
            color={theme.colors.brand[colorMode].text} 
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].inputBg} 
            color={theme.colors.brand[colorMode].text} 
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].inputBg} 
            color={theme.colors.brand[colorMode].text} 
          />
        </FormControl>

        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Input 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].inputBg} 
            color={theme.colors.brand[colorMode].text} 
          />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].inputBg} 
            color={theme.colors.brand[colorMode].text} 
          />
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].selectBg} 
            color={theme.colors.brand[colorMode].text}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Interested in</FormLabel>
          <Select 
            name="interest" 
            value={formData.interest} 
            onChange={handleChange} 
            bg={theme.colors.brand[colorMode].selectBg} 
            color={theme.colors.brand[colorMode].text}
          >
            <option value="">Select Option</option>
            <option value="newsletters">Newsletters</option>
            <option value="promotions">Promotions</option>
            <option value="updates">Updates</option>
          </Select>
        </FormControl>

        <FormControl>
          <Checkbox
            name="agreeTerms"
            isChecked={formData.agreeTerms}
            onChange={handleChange}
          >
            I agree to the terms and conditions
          </Checkbox>
        </FormControl>

        <Button 
          onClick={handleSubmit} 
          bg={theme.colors.brand[colorMode].buttonBg} 
          color={theme.colors.brand[colorMode].buttonText} 
          _hover={{ bg: theme.colors.brand[colorMode].buttonBg }}
          disabled={!isFormValid}
        >
          Submit
        </Button>

        <FormControl display="flex" alignItems="center" mt={4}>
          <FormLabel mb="0" mr={2}>Toggle Theme</FormLabel>
          <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        </FormControl>
      </VStack>
    </Box>
  );
};

const App = () => (
  <ChakraProvider theme={theme}>
    <FormComponent />
  </ChakraProvider>
);

export default App;
