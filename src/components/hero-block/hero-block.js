import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';
import Separator from '../separator/separator';

import './hero-block.sass';

function HeroBlock(props) {
    const { navLogo, navItems } = props;

    const title = 'Everything You Love About Coffee';
    const content = [
        'We makes every day full of energy and taste',
        'Want to try our beans?'
    ];
    const btnText = 'More';

    const spans = content.map((el, i) => (<span key={i}>{el}</span>));

    return (
        <div className="hero-block">
            <NavBar navLogo={navLogo} navItems={navItems} color={'white'} />
            <H1 content={title} color={'white'} shadow={true} />
            <Separator color={'white'} />
            <div className='underH1'>
                {spans}
                <button>{btnText}</button>
            </div>
        </div>
    );
}

export default HeroBlock;