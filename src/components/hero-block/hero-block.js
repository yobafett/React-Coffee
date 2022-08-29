import NavBar from '../nav-bar/nav-bar';

import './hero-block.sass';

function HeroBlock(props) {
    return (
        <div className="hero-block">
            <NavBar navLogo={props.navLogo} navItems={props.navItems} />
        </div>
    );
}

export default HeroBlock;