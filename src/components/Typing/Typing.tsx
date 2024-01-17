import {FC} from "react";
import {IMessages} from "../../types/IMessages.ts";

const Typing:FC<IMessages> = ({message}) => {
  const {time, text, from} = message
  return (
    <>
      <div className="message-data align-left">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message my-message">{text}</div>
    </>
  )
};

export default Typing;