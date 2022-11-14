import '../App.css'
import Tweet from './Tweet'

function TimeStamp(props){
    const timestamp = props.time
    return(
        <span className="timestamp">{timestamp}</span>
    )

}

export default TimeStamp;