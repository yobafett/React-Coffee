import './nav-bar-item.sass';

function NavBarItem(props) {
    const { content, color, onClick } = props;

    return (
        <div className="nav-bar-item" onClick={(e) => { onClick(); }}>
            <span className={`text-${color}`}>{content}</span>
        </div>
    );
}

export default NavBarItem;