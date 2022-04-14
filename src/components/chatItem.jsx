import React from 'react';
import { db } from '../firebase';

const ChatItem = ({ chatroom, setDocId }) => {
  const enterChatroom = () => {
    console.log(chatroom);
    const userId = chatroom.member[0];
    const otherId = chatroom.member[1];

    db.collection('chatroom')
      .where('member', 'array-contains-any', [userId, otherId])
      .get()
      .then((result) => {
        result.forEach((doc) => {
          setDocId(doc.id);
        });
      });
  };

  return (
    <li className="list-group-item" onClick={enterChatroom}>
      <h6 className="chat-room-title">{chatroom.product}</h6>
      <h6 className="text-small">{chatroom.date}</h6>
    </li>
  );
};

export default ChatItem;
