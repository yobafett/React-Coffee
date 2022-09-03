
import HeaderBlock from '../header-block/header-block';
import AboutItem from '../about-item/about-item';
import Footer from '../footer/footer';

import HeaderBg from '../../assets/img/coffee-shop-1209863_1920.jpg';

import './coffee-item-page.sass';

function CoffeeItemPage(props) {
    const { navLogo, navItems, item } = props;

    return (
        <div className='coffee-item-page'>
            <HeaderBlock
                navLogo={navLogo}
                navItems={navItems}
                background={HeaderBg}
                h1Title='Our Coffee' />
            <AboutItem item={item} />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default CoffeeItemPage;