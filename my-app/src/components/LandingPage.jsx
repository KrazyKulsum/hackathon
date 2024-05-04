import About from './About';
import Heading from './Heading';
import './LandingPage.css';
import Button from './SearchButton';

function LandingPage() {
  return (
    <div className="landing-page">
        <Heading/>
        <Button/>
       <About/>
    </div>
  );
}

export default LandingPage;