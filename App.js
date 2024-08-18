# hooks-form

import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import ColorThemeToggle from './components/ColorThemeToggle';
import Form from './components/Form';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" mt={10}>
        <ColorThemeToggle />
        <Form />
      </Box>
    </ChakraProvider>
  );
}

export default App;
