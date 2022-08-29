import { Component } from 'react';
import nextId from "react-id-generator";

import HeroBlock from '../hero-block/hero-block';

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
            ]
        }
    }

    render() {
        const { navLogo, navItems } = this.state;

        return (
            <div>
                <HeroBlock navLogo={navLogo} navItems={navItems} />
            </div>
        );
    }
}

export default App;