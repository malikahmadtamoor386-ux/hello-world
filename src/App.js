import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import Reservation from './pages/Reservation';
import { Route, Routes } from 'react-router-dom';
import ConfirmationPage from './pages/ConfirmationPage';

/**
 * Root component of the Little Lemon Restaurant application.
 * Defines the global layout (Header, Footer) and client-side routing.
 * Uses React Router to switch between Homepage, Reservation, and Confirmation pages.
 */
function App() {
  return (
  <>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/confirmation' element={<ConfirmationPage />}/>
      </Routes>
    <Footer />
  </>
  );
}

export default App;