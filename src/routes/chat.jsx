import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatItem from '../components/chatItem';
import { db } from '../firebase';

const Chat = () => {
  const userId = useParams();
  const [messageValue, setMessageValue] = useState('');
  const [chatroomList, setChatroomList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [docId, setDocId] = useState();
  let chatroomArray = [];
  let messageArray = [];

  console.log(userId.id);

  useEffect(() => {
    db.collection('chatroom')
      .where('member', 'array-contains', userId.id)
      .get()
      .then((result) => {
        result.forEach((doc) => {
          chatroomArray.push(doc.data());
          setDocId(doc.id);
        });
        setChatroomList(chatroomArray);
      });
  }, []);

  const onChangeInput = (e) => {
    setMessageValue(e.target.value);
  };

  const sendMessage = () => {
    db.collection('chatroom')
      .doc(docId)
      .collection('messages')
      .add({
        content: messageValue,
        date: new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0],
        uid: userId.id,
      });
  };

  useEffect(() => {
    db.collection('chatroom')
      .doc(docId)
      .collection('messages')
      .get()
      .then((result) => {
        result.forEach((message) => {
          messageArray.push(message.data());
        });
        setMessageList(messageArray);
      });
  }, [docId]);

  console.log(messageList);

  return (
    <div className="container chatpage p-4">
      <div className="row">
        <div className="col-3 p-0">
          <ul className="list-group chat-list">
            {chatroomList.map((chatroom, i) => {
              return (
                <ChatItem chatroom={chatroom} key={i} setDocId={setDocId} />
              );
            })}
          </ul>
        </div>

        <div className="col-9 p-0">
          <div className="chat-room">
            <ul className="list-group chat-content">
              {messageList.map((message, i) => {
								console.log(message);
                <li key={i}>
                  <span className="chat-box">{message.content}</span>
                </li>;
              })}
            </ul>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={messageValue}
                onChange={onChangeInput}
              />
              <button className="btn btn-secondary" onClick={sendMessage}>
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
