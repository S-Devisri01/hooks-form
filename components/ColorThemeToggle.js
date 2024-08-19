import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import useColorTheme from '../hooks/useColorTheme';

const ColorThemeToggle = () => {
  const [isDark, toggleTheme] = useColorTheme();

  return (
    <IconButton
      aria-label="Toggle Theme"
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      onClick={toggleTheme}
      position="absolute"
      top="1rem"
      right="1rem"
    />
  );
};

export default ColorThemeToggle;
