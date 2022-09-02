
import HeaderBlock from '../header-block/header-block';
import AboutPic from '../about-pic/about-pic';
import GoodsBlock from '../goods-block/goods-block';
import Footer from '../footer/footer';
import HeaderBg from '../../assets/img/coffee-2179009_1920.jpg';

import './goods-page.sass';

function GoodsPage(props) {
    const { navLogo, navItems, coffeeItems, onSearchChange, onFilterChange, filters, currentFilter } = props;

    const aboutUsTitle = 'About our goods';
    const aboutUsText = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. 
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;
    const aboutImg = require(`../../assets/img/Mask Group.jpg`);

    return (
        <div className='goods-page'>
            <HeaderBlock
                navLogo={navLogo}
                navItems={navItems}
                background={HeaderBg}
                h1Title='For your pleasure' />
            <AboutPic
                aboutUsTitle={aboutUsTitle}
                aboutUsText={aboutUsText}
                aboutImg={aboutImg} />
            <GoodsBlock coffeeItems={coffeeItems} />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default GoodsPage;