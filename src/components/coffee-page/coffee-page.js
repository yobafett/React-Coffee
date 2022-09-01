
import HeaderBlock from '../header-block/header-block';
import AboutBeans from '../about-beans/about-beans';
import GoodsBlock from '../goods-block/goods-block';
import Footer from '../footer/footer';

import HeaderBg from '../../assets/img/coffee-shop-1209863_1920.jpg';

import './coffee-page.sass';

function CoffeePage(props) {
    const { navLogo, navItems, coffeeItems, onSearchChange, onFilterChange, filters, currentFilter } = props;
    return (
        <div className='coffee-page'>
            <HeaderBlock
                navLogo={navLogo}
                navItems={navItems}
                background={HeaderBg}
                h1Title='Our Coffee' />
            <AboutBeans />
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