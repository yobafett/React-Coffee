import { Component } from 'react';
import nextId from "react-id-generator";

import MainPage from '../main-page/main-page';
import CoffeePage from '../coffee-page/coffee-page';
import GoodsPage from '../goods-page/goods-page';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'pleasure',
            navLogo: {
                title: 'Coffee house',
                onClick: () => {
                    this.changePage('main');
                }
            },
            navItems: [
                {
                    id: nextId(),
                    title: 'Our coffee',
                    onClick: () => {
                        this.changePage('coffee');
                    }
                },
                {
                    id: nextId(),
                    title: 'For your pleasure',
                    onClick: () => {
                        this.changePage('pleasure');
                    }
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
            coffeeItems: [
                {
                    id: nextId(),
                    title: 'Solimo Coffee Beans 2 kg',
                    img: require(`../../assets/img/solimo.jpg`),
                    price: '10.73',
                    isBest: true,
                    country: 'Ravarai',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'Presto Coffee Beans 1 kg',
                    img: require(`../../assets/img/presto.jpg`),
                    price: '15.99',
                    isBest: true,
                    country: 'Plodlyvia',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: true,
                    country: 'Salamenia',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Keniya',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Columbia',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    onClick: '',
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    onClick: '',
                },
            ],
            searchString: '',
            filters: [
                {
                    id: nextId(),
                    name: 'Keniya',
                },
                {
                    id: nextId(),
                    name: 'Brazil',
                },
                {
                    id: nextId(),
                    name: 'Columbia',
                },
            ],
            currentFilter: ''
        }
    }

    changePage = (page) => {
        this.setState(() => ({
            currentPage: page
        }))
    }

    onSearchInputChange = (e) => {
        this.setState(() => ({
            searchString: e.target.value.toLowerCase()
        }))
    }

    onFilterChange = (filter) => {
        this.setState(({ currentFilter }) => ({
            currentFilter: currentFilter === filter.toLowerCase() ? '' : filter.toLowerCase()
        }))
    }

    render() {
        const { navLogo, navItems, aboutUsText, coffeeItems, currentPage, filters, currentFilter } = this.state;

        let page;
        switch (currentPage) {
            case 'coffee':
                page = (
                    <div className="">
                        <CoffeePage
                            navLogo={navLogo}
                            navItems={navItems}
                            onSearchChange={this.onSearchInputChange}
                            onFilterChange={this.onFilterChange}
                            filters={filters}
                            currentFilter={currentFilter}
                            coffeeItems={coffeeItems.filter(item => {
                                const isSearchMatch = item.title.toLowerCase().indexOf(this.state.searchString) > -1;
                                const isFilterMatch = item.country.toLowerCase().indexOf(this.state.currentFilter) > -1;
                                return !item.isBest && isSearchMatch && isFilterMatch;
                            })} />
                    </div>
                );
                break;
            case 'pleasure':
                page = (
                    <div className="">
                        <GoodsPage
                            navLogo={navLogo}
                            navItems={navItems}
                            onSearchChange={this.onSearchInputChange}
                            onFilterChange={this.onFilterChange}
                            filters={filters}
                            currentFilter={currentFilter}
                            coffeeItems={coffeeItems.filter(item => {
                                const isSearchMatch = item.title.toLowerCase().indexOf(this.state.searchString) > -1;
                                const isFilterMatch = item.country.toLowerCase().indexOf(this.state.currentFilter) > -1;
                                return !item.isBest && isSearchMatch && isFilterMatch;
                            })} />
                    </div>
                );
                break;
            default:
                page = (
                    <MainPage
                        navLogo={navLogo}
                        navItems={navItems}
                        aboutUsText={aboutUsText}
                        coffeeItems={coffeeItems.filter(item => item.isBest)} />
                );
                break;
        }

        return (
            <div className='app'>
                {page}
            </div>
        );
    }
}

export default App;