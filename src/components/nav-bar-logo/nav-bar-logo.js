import './nav-bar-logo.sass';

function NavBarLogo(props) {
    const { text, onClick } = props;

    return (
        <div className="nav-bar-logo">
            <img className='logo' src={require('../../assets/img/logo.svg').default} alt="" />
            <span className='text'>{text}</span>
        </div>
    );
}

export default NavBarLogo;