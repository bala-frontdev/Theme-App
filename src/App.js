import { AppContent } from './components/AppContent';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import { DarkTheme } from './styles/darkTheme';
import { ToggleTheme } from './components/ToggleTheme';
import { NavBar } from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyles,lightTheme,darkTheme } from './styles/globalStyles';


const Container = styled.div``;

function App() {
  const [ theme, toggleTheme ] = DarkTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
        <Router>
         <NavBar/>
        </Router>
        <Container>
        <AppContent />
        </Container>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </>
  );
}

export default App;
