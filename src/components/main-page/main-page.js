import HeroBlock from '../hero-block/hero-block';
import AboutUs from '../about-us/about-us';
import OurBestBlock from '../our-best-block/our-best-block';
import Footer from '../footer/footer';

import './main-page.sass';

function MainPage(props) {
    const { navLogo, navItems, coffeeItems } = props;

    const title = 'About Us';
    const content = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.`;

    return (
        <div className='main-page'>
            <HeroBlock navLogo={navLogo} navItems={navItems} />
            <AboutUs title={title} content={content} />
            <OurBestBlock coffeeItems={coffeeItems} />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default MainPage;