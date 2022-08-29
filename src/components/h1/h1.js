
import './h1.sass';

function H1(props) {
    const { text, color, shadow } = props;
    const style = {
        color: color
    }

    return (
        <div className="h1" >
            <h1 style={style} className={shadow ? 'shadow' : ''}>{text}</h1>
        </div>
    );
}

export default H1;