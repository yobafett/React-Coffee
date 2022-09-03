import './coffee-item.sass';

function CoffeeItem(props) {
    const { id, img, title, price, isBest, country, onClick } = props;
    
    let classes = 'coffee-item';
    if (!isBest) {
        classes += ' shadow';
    }

    return (
        <div className={classes} onClick={() => onClick(id)}>
            <img src={img} alt="" />
            <span className='title'>{title}</span>
            {!isBest ? (<span className='country'>{country}</span>) : ''}
            <span className='price'>{price}$</span>
        </div>
    );
}

export default CoffeeItem;