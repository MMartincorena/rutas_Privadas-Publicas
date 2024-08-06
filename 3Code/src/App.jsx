import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PrivateRoute from './components/PrivateRoute';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import HRPage from './pages/HRPage';
import RecruiterPage from './pages/RecruiterPage';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path="/student" element={<PrivateRoute><StudentPage /></PrivateRoute>} />
        <Route path="/hr" element={<PrivateRoute><HRPage /></PrivateRoute>} />
        <Route path="/recruiter" element={<PrivateRoute><RecruiterPage /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} /> {/* Ruta para página 404 */}

      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
