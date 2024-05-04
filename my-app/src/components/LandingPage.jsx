import './LandingPage.css';
import { ReactComponent as LandingMap } from '../assets/landing-map.svg';
import NavBar from './NavBar';


function LandingPage() {
  return (
    <div className="landing-page">
        <NavBar/>
        <LandingMap/>
    </div>
  );
}

export default LandingPage;