import H2 from '../h2/h2';
import OurBestItem from '../our-best-item/our-best-item';

import './our-best-block.sass';

function OurBestBlock(props) {
    const { bestItems } = props;

    const items = bestItems.map((item) => {
        return (
            <OurBestItem
                title={item.title}
                img={item.img}
                price={item.price}
                onClick={item.onClick}
                key={item.id} />
        );
    })

    return (
        <div className="our-best-block">
            <H2 text={'Our best'} color={'#000'} shadow={false} />
            <div className='best-items'>
                {items}
            </div>
        </div>
    );
}

export default OurBestBlock;