import CoffeeItem from '../coffee-item/coffee-item';
import Search from '../search/search';
import Filter from '../filter/filter';

import './goods-block.sass';

function GoodsBlock(props) {
    const { coffeeItems, onSearchChange, onFilterChange, filters, currentFilter } = props;

    const items = coffeeItems.map((item) => {
        return (
            <CoffeeItem
                title={item.title}
                img={item.img}
                price={item.price}
                onClick={item.onClick}
                isBest={item.isBest}
                country={item.country}
                key={item.id} />
        );
    })

    return (
        <div className="goods-block">
            <div className='search-panel'>
                <Search
                    label='Lookiing for'
                    placeholder='start typing here...'
                    onSearchChange={onSearchChange} />
                <Filter
                    label='Or filter'
                    onFilterChange={onFilterChange}
                    currentFilter={currentFilter}
                    filters={filters} />
            </div>
            <div className='coffee-items'>
                {items}
            </div>
        </div>
    );
}

export default GoodsBlock;