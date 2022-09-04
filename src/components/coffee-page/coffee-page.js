
import HeaderBlock from '../header-block/header-block';
import AboutPic from '../about-pic/about-pic';
import GoodsBlock from '../goods-block/goods-block';
import Footer from '../footer/footer';

import HeaderBg from '../../assets/img/coffee-shop-1209863_1920.jpg';

import './coffee-page.sass';

function CoffeePage(props) {
    const { navLogo, navItems, coffeeItems,
        onSearchChange, onFilterChange,
        filters, currentFilter } = props;

    const title = 'About our beans';
    const content = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. 
    As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.`;
    const img = require(`../../assets/img/girl-865304_1920.jpg`);

    return (
        <div className='coffee-page'>
            <HeaderBlock
                navLogo={navLogo}
                navItems={navItems}
                background={HeaderBg}
                h1Title='Our Coffee' />
            <AboutPic title={title} content={content} img={img} />
            <GoodsBlock
                coffeeItems={coffeeItems}
                onSearchChange={onSearchChange}
                onFilterChange={onFilterChange}
                currentFilter={currentFilter}
                filters={filters} />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default CoffeePage;