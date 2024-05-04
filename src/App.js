import HalalConnectPage from './components/HalalConnectPage';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/halal-connect" element={<HalalConnectPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
