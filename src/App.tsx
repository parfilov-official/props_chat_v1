import './App.css'
import MessageHistory from "./components/MessageHistory/MessageHistory.tsx";
import {messages} from './data.js'

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages}/>
        </div>
      </div>
    </div>
  )
}

export default App