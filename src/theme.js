import {createContext , useState ,useMemo} from 'react';
import {createTheme} from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';

// color Design Tokens


export const tokens = (mode) => ({

    ...(mode === 'dark'
        ? {
    Primary: {

          100: "#d2d7d8",
          200: "#a5afb1",
          300: "#79868b",
          400: "#4c5e64",
          500: "#1f363d",
          600: "#192b31",
          700: "#132025",
          800: "#0c1618",
          900: "#060b0c",
    
},  //Primary Dark Green
Secondary: {
          100: "#d9e4e8",
          200: "#b3c9d1",
          300: "#8cafba",
          400: "#6694a3",
          500: "#40798c",
          600: "#336170",
          700: "#264954",
          800: "#1a3038",
          900: "#0d181c",
}, //saturated Green as a accent
Third: {
        100: "#e2eeec",
        200: "#c6ddd9",
        300: "#a9cbc7",
        400: "#8dbab4",
        500: "#70a9a1",
        600: "#5a8781",
        700: "#436561",
        800: "#2d4440",
        900: "#162220",
}, //Light Green 2 as accent 
Fourth:
{
          100: "#ecf3ed",
          200: "#d8e6da",
          300: "#c5dac8",
          400: "#b1cdb5",
          500: "#9ec1a3",
          600: "#7e9a82",
          700: "#5f7462",
          800: "#3f4d41",
          900: "#202721",
}, //Dark Gray bg for dark mode
lightColor: {
    100: "#f5f9f3",
    200: "#ecf3e7",
    300: "#e2ecdb",
    400: "#d9e6cf",
    500: "#cfe0c3",
    600: "#a6b39c",
    700: "#7c8675",
    800: "#535a4e",
    900: "#292d27",
},
}
    :
{
    Primary: {

          100: "#060b0c",
          200: "#0c1618",
          300: "#132025",
          400: "#192b31",
          500: "#1f363d",
          600: "#4c5e64",
          700: "#79868b",
          800: "#a5afb1",
          900: "#d2d7d8",
    
},  //Primary Dark Green
Secondary: {
          100: "#0d181c",
          200: "#1a3038",
          300: "#264954",
          400: "#336170",
          500: "#40798c",
          600: "#6694a3",
          700: "#8cafba",
          800: "#b3c9d1",
          900: "#d9e4e8",
}, //saturated Green as a accent
Third: {
        100: "#162220",
        200: "#2d4440",
        300: "#436561",
        400: "#5a8781",
        500: "#70a9a1",
        600: "#8dbab4",
        700: "#a9cbc7",
        800: "#c6ddd9",
        900: "#e2eeec",
}, //Light Green 2 as accent 
Fourth:
{
          100: "#202721",
          200: "#3f4d41",
          300: "#5f7462",
          400: "#7e9a82",
          500: "#9ec1a3",
          600: "#b1cdb5",
          700: "#c5dac8",
          800: "#d8e6da",
          900: "#ecf3ed",
}, //Dark Gray bg for dark mode
lightColor: {
    100: "#292d27",
    200: "#535a4e",
    300: "#7c8675",
    400: "#a6b39c",
    500: "#cfe0c3",
    600: "#d9e6cf",
    700: "#e2ecdb",
    800: "#ecf3e7",
    900: "#f5f9f3",
},// White for bg of light mode
}
)
});

// Mui Theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return{
        palette : {
            mode: mode,
            ...(mode === 'dark'
                ?{
                    primary :{
                        main : colors.Primary[500],
                    },
                    secondary :{
                        main : colors.Secondary[500],
                    },
                    neutral : {
                        dark : colors.lightColor[700],
                        main : colors.lightColor[500],
                        light : colors.lightColor[100],
                    },
                    background :{
                        default: colors.Primary[900],
                    }
                }
                :
                {
                     primary :{
                        main : colors.Primary[500],
                    },
                    secondary :{
                        main : colors.Secondary[500],
                    },
                    neutral : {
                        dark : colors.lightColor[700],
                        main : colors.lightColor[500],
                        light : colors.lightColor[100],
                    },
                    background :{
                        default: colors.Primary[900],
                    }
                }),
            },
            typography:{
                fontFamily: ['Lato', 'sans-serif'].join(','),
                fontSize: 10,
                h1: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 32,
                },
                h2: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 24,
                },
                h3: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 20,
                },
                h4: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 16,
                },
                h5: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 14,
                },
                h6: {
                    fontFamily: ['Lato', 'sans-serif'].join(','),
                    fontSize: 12,
                },
            }
    }
}


//context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {}, 
});

export const useMode = () => {
    const [mode , setMode] = useState('light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
        }       
    }), []);

const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

return {theme, colorMode};
};