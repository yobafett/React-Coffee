import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';

import './header-block.sass';

function HeaderBlock(props) {
    return (
        <div className="header-block">
            <NavBar navLogo={props.navLogo} navItems={props.navItems} color={'white'} />
            <H1 text={'Our Coffee'} color={'#fff'} shadow={false} />
        </div>
    );
}

export default HeaderBlock;