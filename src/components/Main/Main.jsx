import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import purpleBallMobil from '../../assets/images/Body/purple ball.svg';
import redBallMin from '../../assets/images/Body/red ball min.svg';
import redBallDesc from '../../assets/images/Body/red ball desc.svg';
import purpleBallDesc from '../../assets/images/Body/purple ball desc.svg';
import './Main.scss'

const Main = () => {
return (
<main className='main'>
	<Header />
	<MainSection />
	<Footer />
	<div className="purpleLight"></div>
	<div className="redLight"></div>
	<div className="purpleBallMobil"><img src={purpleBallMobil} alt='purple ball' /></div>
	<div className="redBallMobil"></div>
	<div className="redBallMin"><img src={redBallMin} alt='red ball' /></div>
	<div className="redBallDesc"><img src={redBallDesc} alt='red ball' /></div>
	<div className="purpleBallDesc"><img src={purpleBallDesc} alt='purple ball' /></div>
</main>
);
};

export default Main;