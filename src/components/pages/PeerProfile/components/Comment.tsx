import { ProfilePicture } from "../../../common";
import { convertTime } from "../../../../utilities";

interface Props {
  picture: string | null;
  sender: string;
  timestamp: number;
  message: string;
}

const Comment = ({picture, sender, timestamp, message}: Props) => (
  <div className="comment">
    <ProfilePicture image={picture} />
    <div>
      <div className="col">
        <span className="name">{sender}</span>
        <span className="time">{convertTime(timestamp)}</span>
      </div>
      <div className="message">{message}</div>
    </div>
  </div>
);

export default Comment;
