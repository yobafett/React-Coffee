
import HeaderBlock from '../header-block/header-block';
import AboutBeans from '../about-beans/about-beans';
import Footer from '../footer/footer';

import './coffee-page.sass';

function CoffeePage(props) {
    const { navLogo, navItems } = props;
    return (
        <div className='coffee-page'>
            <HeaderBlock navLogo={navLogo} navItems={navItems} />
            <AboutBeans />
            <Footer navLogo={navLogo} navItems={navItems} color={'black'} />
        </div>
    );
}

export default CoffeePage;