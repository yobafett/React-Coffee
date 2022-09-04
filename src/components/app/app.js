import { Component } from 'react';
import nextId from "react-id-generator";

import MainPage from '../main-page/main-page';
import CoffeePage from '../coffee-page/coffee-page';
import GoodsPage from '../goods-page/goods-page';
import CoffeeItemPage from '../coffee-item-page/coffee-item-page';

import './app.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: '',
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
            coffeeItems: [
                {
                    id: nextId(),
                    title: 'Solimo Coffee Beans 2 kg',
                    img: require(`../../assets/img/solimo.jpg`),
                    price: '10.73',
                    isBest: true,
                    country: 'Ravarai',
                    description: `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'Presto Coffee Beans 1 kg',
                    img: require(`../../assets/img/presto.jpg`),
                    price: '15.99',
                    isBest: true,
                    country: 'Plodlyvia',
                    description: `Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: true,
                    country: 'Salamenia',
                    description: `Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Keniya',
                    description: `Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    description: `Sed ut perspiciatis unde omnis iste natus error 
                    sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                    et quasi architecto beatae vitae dicta sunt explicabo.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Columbia',
                    description: `Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia consequuntur 
                    magni dolores eos qui ratione voluptatem sequi nesciunt.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    description: `Neque porro quisquam est, qui dolorem ipsum quia 
                    dolor sit amet, consectetur, adipisci velit, 
                    sed quia non numquam eius modi tempora incidunt ut 
                    labore et dolore magnam aliquam quaerat voluptatem.`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    description: `Ut enim ad minima veniam, 
                    quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                    nisi ut aliquid ex ea commodi consequatur?`,
                    onClick: this.onItemClick,
                },
                {
                    id: nextId(),
                    title: 'AROMISTICO Coffee 1 kg',
                    img: require(`../../assets/img/aromistico.jpg`),
                    price: '6.99',
                    isBest: false,
                    country: 'Brazil',
                    description: `Quis autem vel eum iure reprehenderit 
                    qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
                    onClick: this.onItemClick,
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
            currentFilter: '',
            activeItem: ''
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

    onItemClick = (itemId) => {
        this.setState(() => ({
            activeItem: this.state.coffeeItems.filter(item => item.id === itemId)[0]
        }));
        this.changePage('item');
    }

    render() {
        const { navLogo, navItems, coffeeItems, currentPage, filters, currentFilter, activeItem } = this.state;

        let page;
        switch (currentPage) {
            case 'item':
                page = (
                    <div className="">
                        <CoffeeItemPage navLogo={navLogo} navItems={navItems} item={activeItem} />
                    </div>
                );
                break;
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
                            coffeeItems={coffeeItems.filter(item => !item.isBest)} />
                    </div>
                );
                break;
            default:
                page = (
                    <MainPage
                        navLogo={navLogo}
                        navItems={navItems}
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