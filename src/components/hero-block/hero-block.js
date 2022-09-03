import NavBar from '../nav-bar/nav-bar';
import H1 from '../h1/h1';
import Separator from '../separator/separator';

import './hero-block.sass';

function HeroBlock(props) {
    const h1Title = 'Everything You Love About Coffee';
    const textStrings = [
        'We makes every day full of energy and taste',
        'Want to try our beans?'
    ];
    const btnText = 'More';

    const spans = textStrings.map((el, i) => (<span key={i}>{el}</span>));

    return (
        <div className="hero-block">
            <NavBar navLogo={props.navLogo} navItems={props.navItems} color={'white'} />
            <H1 text={h1Title} color={'#fff'} shadow={true} />
            <Separator color={'white'} />
            <div className='underH1'>
                {spans}
                <button>{btnText}</button>
            </div>
        </div>
    );
}

export default HeroBlock;