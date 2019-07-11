import React from 'react';

export const themes = {
    light: {
        background: '#FFFFFF',
        btnColor: '#F0F0F0',
        color: '#00000'
    },
    dark: {
        background: '#000000',
        btnColor: '#666666',
        color: '#FFFFFF'
    },
};

export const ThemeContext = React.createContext(themes.light);