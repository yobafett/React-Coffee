import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';

import './hero-block.sass';

function HeroBlock(props) {
    return (
        <div className="hero-block">
            <NavBar navLogo={props.navLogo} navItems={props.navItems} />
            <H1 text={'Everything You Love About Coffee'} color={'#fff'} shadow={true}/>
        </div>
    );
}

export default HeroBlock;