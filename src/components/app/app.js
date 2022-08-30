import { Component } from 'react';
import nextId from "react-id-generator";

import HeroBlock from '../hero-block/hero-block';
import AboutUs from '../about-us/about-us';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navLogo: {
                title: 'Coffee house',
                onClick: ''
            },
            navItems: [
                {
                    title: 'Our coffee',
                    onClick: '',
                    id: nextId(),
                },
                {
                    title: 'For your pleasure',
                    onClick: '',
                    id: nextId(),
                },
            ],
            aboutUsText: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
            
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.`,
        }
    }

    render() {
        const { navLogo, navItems, aboutUsText } = this.state;

        return (
            <div>
                <HeroBlock navLogo={navLogo} navItems={navItems} />
                <AboutUs aboutUsText={aboutUsText} />
            </div>
        );
    }
}

export default App;