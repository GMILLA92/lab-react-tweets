import '../App.css'
import Tweet from './Tweet'

function Message(props){
    const message = props.message
    return (
        <p className="message">{message}</p>
    )

}

export default Message;