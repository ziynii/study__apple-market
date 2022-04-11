import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const Chat = () => {
  const userId = useParams();
  const [chatroomList, setChatroomList] = useState([]);
  let chatroomArray = [];

  console.log(userId.id);

  useEffect(() => {
    db.collection('chatroom')
      .where('member', 'array-contains', userId.id)
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.data());
          chatroomArray.push(doc.data());
        });
        setChatroomList(chatroomArray);
      });
  }, []);

  return (
    <div className="container chatpage p-4">
      <div className="row">
        <div className="col-3 p-0">
          <ul className="list-group chat-list">
            {chatroomList.map((chatroom, i) => {
              return (
                <li className="list-group-item" key={i}>
                  <h6 className="chat-room-title">{chatroom.product}</h6>
                  <h6 className="text-small">{chatroom.date}</h6>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-9 p-0">
          <div className="chat-room">
            <ul className="list-group chat-content">
              <li>
                <span className="chat-box">채팅방 1 내용</span>
              </li>
              <li>
                <span className="chat-box">채팅방 1 내용</span>
              </li>
              <li>
                <span className="chat-box mine">채팅방 1 내용</span>
              </li>
            </ul>

            <div className="input-group">
              <input type="text" className="form-control" />
              <button className="btn btn-secondary">전송</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
