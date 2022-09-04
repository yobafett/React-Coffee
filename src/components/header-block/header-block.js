import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';

import './header-block.sass';

function HeaderBlock(props) {
    const { h1Title, background, navLogo, navItems } = props;

    return (
        <div className="header-block" style={{ backgroundImage: `url(${background})` }}>
            <NavBar navLogo={navLogo} navItems={navItems} color={'white'} />
            <H1 content={h1Title} color={'#fff'} shadow={false} />
        </div>
    );
}

export default HeaderBlock;