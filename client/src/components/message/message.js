import React from 'react';
import styled from 'styled-components';
import { format } from 'timeago.js';

function Message({ messages, own }) {
  return (
    <div className={own ? 'messageBoxOwn' : 'messageBox'}>
      <MessageTop>
        <MessageImg src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <MessageText>{messages?.text}</MessageText>
      </MessageTop>
      <MessageBottom>{format(messages?.createdAt)}</MessageBottom>
    </div>
  );
}

export default Message;
const MessageBox = styled.div`
  display: flex;
  felx-direction: column;
  margin-top: 20px;
`;
const MyMessageBox = styled.div`
  display: flex;
  margin-top: 20px;

  justify-content: flex-end;
`;
const MessageImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  margin-right: 10px;
`;
const MessageTop = styled.div`
  display: flex;
`;
const MessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid black;
  max-width: 300px;
  word-break: break-all;
`;
const MyMessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: rgb(241, 241, 194);
  max-width: 300px;
  word-break: break-all;
`;
const MessageBottom = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 10px;
`;
