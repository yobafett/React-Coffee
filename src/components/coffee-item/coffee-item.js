import './coffee-item.sass';

function CoffeeItem(props) {
    const { img, title, price, isBest, country, onClick } = props;

    return (
        <div className="coffee-item" >
            <img src={img} alt="" />
            <span className='title'>{title}</span>
            {!isBest ? `<span className='country'>{country}</span>` : ``}
            <span className='price'>{price}$</span>
        </div>
    );
}

export default CoffeeItem;