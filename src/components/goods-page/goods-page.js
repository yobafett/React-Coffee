
import HeaderBlock from '../header-block/header-block';
import AboutPic from '../about-pic/about-pic';
import GoodsBlock from '../goods-block/goods-block';
import Footer from '../footer/footer';
import HeaderBg from '../../assets/img/coffee-2179009_1920.jpg';

import './goods-page.sass';

function GoodsPage(props) {
    const { navLogo, navItems, coffeeItems, onSearchChange, onFilterChange, filters, currentFilter } = props;

    return (
        <div className='goods-page'>
            <HeaderBlock
                navLogo={navLogo}
                navItems={navItems}
                background={HeaderBg}
                h1Title='For your pleasure' />
            <AboutPic />
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

export default GoodsPage;