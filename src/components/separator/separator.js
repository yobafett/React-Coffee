
import './separator.sass';

function Separator(props) {
    let img;

    if(props.color === 'white'){
        img = (<img src={require(`../../assets/img/separator-white.svg`).default} alt="" />);
    } else {
        img = (<img src={require(`../../assets/img/separator-black.svg`).default} alt="" />);
    }

    return (
        <div className="separator" >
            {img}
        </div>
    );
}

export default Separator;