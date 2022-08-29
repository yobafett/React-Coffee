import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';
import Separator from '../separator/separator';

import './hero-block.sass';

function HeroBlock(props) {
    return (
        <div className="hero-block">
            <NavBar navLogo={props.navLogo} navItems={props.navItems} />
            <H1 text={'Everything You Love About Coffee'} color={'#fff'} shadow={true}/>
            <Separator color={'white'}/>
        </div>
    );
}

export default HeroBlock;