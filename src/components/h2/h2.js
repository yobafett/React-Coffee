
import './h2.sass';

function H2(props) {
    const { text: content, color, shadow } = props;
    const style = {
        color: color
    }

    return (
        <div className="h2" >
            <h2 style={style} className={shadow ? 'shadow' : ''}>{content}</h2>
        </div>
    );
}

export default H2;