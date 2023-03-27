import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

export enum MEDIA {
  xs = '(max-width:767px)',
  sm = '(max-width:1023px)',
  md = '(max-width:1279px)',
  lg = '(max-width:1919px)',
  xl = '(min-width:1920px)',
}

export const getBreakpoints = () => ({
  xs: useMediaQuery(theme.breakpoints.between('xs', 'sm')),
  sm: useMediaQuery(theme.breakpoints.between('sm', 'md')),
  md: useMediaQuery(theme.breakpoints.between('md', 'lg')),
  lg: useMediaQuery(theme.breakpoints.between('lg', 'xl')),
  xl: useMediaQuery('(min-width:1920px)'),
});
