import '../App.css'
import ProfileImage from './ProfileImage'
import TimeStamp from './Timestamp'
import User from './User'
import Message from './Message'
import Actions from './Actions'

function Tweet(props) {
  const {user, timestamp,message }= props.tweet
  const name = user.name
  const image = user.image
  const handle = user.handle
  return (

    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">

          <User user={user}/>
        
          <TimeStamp time= {timestamp}/>

        </div>

        <Message message = {message}/>

        <Actions />
       
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
