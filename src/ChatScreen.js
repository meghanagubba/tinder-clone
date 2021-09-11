import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState()
    const [messages, setMessages] = useState([
        {
            name:"Ellen",
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ellen-degeneres-pics-1579803590.jpg?crop=1.00xw:0.623xh;0,0.150xh&resize=1200:*',
            message:'Whats up'
        },
        {
            name:"Ellen",
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ellen-degeneres-pics-1579803590.jpg?crop=1.00xw:0.623xh;0,0.150xh&resize=1200:*',
            message:'How is your day'
        },
        {
            message:'Its good! what about you?'
        }
    ])

    const handleSend = e =>{
        e.preventDefault();
        
        setMessages([...messages, {message: input}]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/21</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen_message">
                    <Avatar className="chatScreen_image" alt={message.name} src={message.image} />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                 ) : (
                <div className="chatScreen_message">
                    <p className="chatScreen_textUser">{message.message}</p>
                </div>
                 )
            ))}
                <form className="chatScreen_input">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="chatScreen_inputField" 
                      placeholder="Type a message..." 
                      type="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>
        </div>
    );
}

export default ChatScreen