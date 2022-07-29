import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Conversation from '../components/conversations/conversation';
import Message from '../components/message/message';
import ChatOnline from '../components/chatOnline/chatOnline';
import { useState } from 'react';
import userApi from '../api/user/userApi';
import { io } from 'socket.io-client';

import axios from 'axios';
function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState('');
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const socket = useRef();
  const scrollRef = useRef();
  console.log('유저아이디:', user);

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data) => {
      console.log('받은 메세지 :', data);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        creatAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    userApi.homeNavApi().then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    if (user._id !== null || undefined) {
      socket.current.emit('addUser', user._id);
    }
    socket.current.on('getUsers', (users) => {
      //console.log('유저:', users);
    });
  }, [user]);
  //메세지보내기
  useEffect(() => {});

  useEffect(() => {
    axios.get(`api/conversations/${user._id}`).then((res) => {
      setConversations(res.data);
    });
  }, [user]);

  useEffect(() => {
    axios.get(`api/messages/${currentChat?._id}`).then((res) => {
      setMessages(res.data);
    });
  }, [currentChat]);
  //console.log('text:', messages);

  // 메세지 보내기 핸들러
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const message = {
      senderId: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    //받는 매세지
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    console.log('받는사람아이디:', receiverId);
    console.log('보내는 사람 아이디 :', user._id);
    //메세지보내기
    socket.current.emit('sendMessage', {
      senderId: user,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post('api/messages', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="MessageContainer">
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <ChatMenuInfo placeholder="Search for friends" />

            {conversations.map((conversation, i) => {
              console.log(conversation);
              return (
                <div
                  onClick={() => {
                    setCurrentChat(conversation);
                  }}
                >
                  <Conversation
                    conversation={conversation}
                    currentUser={user}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <ChatBoxTop>
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message messages={m} own={m.senderId === user._id} />
                    </div>
                  ))}
                </ChatBoxTop>
                <ChatBoxBottom>
                  <ChatMessageInput
                    placeholder="write something..."
                    value={newMessage}
                    onChange={(e) => {
                      setNewMessage(e.target.value);
                    }}
                  />
                  <ChatButton onClick={onSubmitHandler}>전송</ChatButton>
                </ChatBoxBottom>
              </>
            ) : (
              <NoConversationText>Start a chat</NoConversationText>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Messenger };

const ChatMenuInfo = styled.input`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
`;
const ChatBoxTop = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;
`;
const ChatBoxBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChatMessageInput = styled.textarea`
  width: 80%;
  height: 90px;
  padding: 10px;
`;
const ChatButton = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const NoConversationText = styled.span`
  position: absolute;
  top: 30%;
  font-size: 50px;
  color: rgb(212, 202, 202);
  margin-left: 100px;
  cursor: default;
`;
