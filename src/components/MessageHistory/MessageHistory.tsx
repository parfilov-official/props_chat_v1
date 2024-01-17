import Message from "../Message/Message.tsx";
import Typing from "../Typing/Typing.tsx";
import Response from "../Response/Response.tsx";
import {FC} from "react";
import {IMessageHistory} from "../../types/IMessageHistory.ts";


const MessageHistory:FC<IMessageHistory> = ({list = []}) => {
  console.log(list)
  return (
    <ul>
      {list.map((message) => {
        return (
          <li key={message.id} className="clearfix">
            {message.type === "response" ? <Response message={message}/> : false}
            {message.type === "message" ? <Message message={message}/> : false}
            {message.type === "typing" ? <Typing message={message}/> : false}
          </li>
        )
      })}
    </ul>
  );
};

export default MessageHistory;