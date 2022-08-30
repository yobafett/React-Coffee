import './our-best-item.sass';

function OurBestItem(props) {
    const { img, title, price, onClick } = props;

    return (
        <div className="our-best-item" >
            <img src={img} alt="" />
            <span className='title'>{title}</span>
            <span className='price'>{price}$</span>
        </div>
    );
}

export default OurBestItem;