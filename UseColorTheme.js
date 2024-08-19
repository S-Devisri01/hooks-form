import { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';

const useColorTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(colorMode === 'dark');

  const toggleTheme = () => {
    toggleColorMode();
    setIsDark(!isDark);
  };

  return [isDark, toggleTheme];
};

export default useColorTheme;
U
