import { Component } from 'react';
import nextId from "react-id-generator";
import MainPage from '../main-page/main-page';

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
            bestItems: [
                {
                    title: 'Solimo Coffee Beans 2 kg',
                    img: require(`../../assets/img/solimo.jpg`),
                    price: '10.73',
                    onClick: '',
                    id: nextId(),
                },
                {
                    title: 'Presto Coffee Beans 1 kg',
                    img: require(`../../assets/img/presto.jpg`),
                    price: '15.99',
                    onClick: '',
                    id: nextId(),
                },
                {
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    onClick: '',
                    id: nextId(),
                },
            ],
        }
    }

    render() {
        const { navLogo, navItems, aboutUsText, bestItems } = this.state;

        return (
            <div className='app'>
                <MainPage
                    navLogo={navLogo}
                    navItems={navItems}
                    aboutUsText={aboutUsText}
                    bestItems={bestItems} />
            </div>
        );
    }
}

export default App;