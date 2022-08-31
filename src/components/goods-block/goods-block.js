import CoffeeItem from '../coffee-item/coffee-item';

import './goods-block.sass';

function GoodsBlock(props) {
    const { coffeeItems } = props;

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
            <div className='coffee-items'>
                {items}
            </div>
        </div>
    );
}

export default GoodsBlock;