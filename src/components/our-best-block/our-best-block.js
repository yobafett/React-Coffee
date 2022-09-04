import H2 from '../h2/h2';
import CoffeeItem from '../coffee-item/coffee-item';

import './our-best-block.sass';

function OurBestBlock(props) {
    const { items } = props;

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

    return (
        <div className="our-best-block">
            <H2 content={'Our best'} color={'#000'} shadow={false} />
            <div className='coffee-items'>
                {itemElements}
            </div>
        </div>
    );
}

export default OurBestBlock;