import '../App.css'
import Tweet from './Tweet'

function User(props){
const {name, image, handle} = props.user
    return (
        <span className="user">
            <span className="name">{name} </span>
            <span className="handle">{handle}</span>
        </span>
    )

}
export default User;