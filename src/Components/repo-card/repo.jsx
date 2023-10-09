import MyButton from "../button/button";
import './repo.css';

const Repo = (props) => {
    return (
        <MyButton>
            <div className="repoCard">
                <img src={props.src} alt={props.alt} />
                <h3 className="title">{props.title}</h3>
                <p className="desc">{props.children}</p>
            </div>
        </MyButton>
    );
}

export default Repo