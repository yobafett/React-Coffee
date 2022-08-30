import './nav-bar-item.sass';

function NavBarItem(props) {
    const { text, color, onClick } = props;

    return (
        <div className="nav-bar-item" onClick={(e) => { onClick(); }}>
            <span className={`text-${color}`}>{text}</span>
        </div>
    );
}

export default NavBarItem;