import CoffeeItem from '../coffee-item/coffee-item';
import Search from '../search/search';
import Filter from '../filter/filter';

import './goods-block.sass';

function GoodsBlock(props) {
    const { items , onSearchChange, onFilterChange, filters, currentFilter } = props;

    const itemElements = items.map((item) => {
        return (
            <CoffeeItem
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                onClick={item.onClick}
                isBest={item.isBest}
                country={item.country}
                key={item.id} />
        );
    })

    let searchPanel;
    if (filters) {
        searchPanel = (
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
        );
    };

    return (
        <div className="goods-block">
            {searchPanel}
            <div className='coffee-items'>
                {itemElements}
            </div>
        </div>
    );
}

export default GoodsBlock;