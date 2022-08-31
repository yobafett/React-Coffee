import HeroBlock from '../hero-block/hero-block';
import AboutUs from '../about-us/about-us';
import OurBestBlock from '../our-best-block/our-best-block';
import Footer from '../footer/footer';

import './main-page.sass';

function MainPage(props) {
    const { navLogo, navItems, aboutUsText, coffeeItems } = props;
    return (
        <div className='main-page'>
            <HeroBlock navLogo={navLogo} navItems={navItems} />
            <AboutUs aboutUsText={aboutUsText} />
            <OurBestBlock coffeeItems={coffeeItems} />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default MainPage;