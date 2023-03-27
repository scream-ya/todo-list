import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from 'pages/Main';
import { theme } from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Main />
  </ThemeProvider>
);

export default App;
