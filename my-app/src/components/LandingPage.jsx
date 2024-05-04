import About from './About';
import Heading from './Heading';
import './LandingPage.css';
import NavBar from './NavBar';
import Button from './SearchButton';

function LandingPage() {
  return (
    <div className="landing-page">
        <NavBar/>
        <div className='header'>
            <Heading/>
            <Button/>
        </div>
       <About/>
    </div>
  );
}

export default LandingPage;