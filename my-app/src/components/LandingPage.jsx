import About from './About';
import Heading from './Heading';
import './LandingPage.css';
import { ReactComponent as LandingMap } from '../assets/landing-map.svg';
import NavBar from './NavBar';
import Button from './SearchButton';

function LandingPage() {
  return (
    <div className="landing-page">
        <NavBar/>
        <LandingMap/>
        <Heading/>
        <Button/>
       <About/>
    </div>
  );
}

export default LandingPage;