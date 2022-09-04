import './nav-bar-logo.sass';

function NavBarLogo(props) {
    const { content, color, onClick } = props;

    let img;
    if (color === 'white') {
        img = (<img src={require(`../../assets/img/logo.svg`).default} alt="" />);
    } else {
        img = (<img src={require(`../../assets/img/logo-black.svg`).default} alt="" />);
    }

    return (
        <div className="nav-bar-logo" onClick={(e) => { onClick(); }}>
            {img}
            <span className={`text-${color}`}>{content}</span>
        </div>
    );
}

export default NavBarLogo;