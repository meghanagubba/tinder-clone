import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey, how are you"  
                timestamp="35 minutes ago"
                profilePic ="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
            <Chat
                name="Ellen"
                message="whats up?"
                timestamp="55 minutes ago"
                profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ellen-degeneres-pics-1579803590.jpg?crop=1.00xw:0.623xh;0,0.150xh&resize=1200:*"
            />
            <Chat
                name="Sandra"
                message="Ola"
                timestamp="3 days ago"
                profilePic="https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg"
            />
            <Chat
                name="Natasha"
                message="Oops there is he is..."
                timestamp="1 week ago"
                profilePic="https://www.bellnunnally.com/27F299/assets/images/attorneys/4/Natasha_Gandhi.jpg"
            />
        </div>
    )
}

export default Chats
